/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useEffect, useCallback, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/app/redux-store";
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import moment, { Moment } from "moment";
import { locations } from "@/utils";
import { useSearchParams } from "react-router-dom";

type FormSearchEventsData = {
  location?: string;
  price?: number;
  date?: Moment;
};

const schema = yup.object().shape({
  location: yup.string().optional(),
  price: yup
    .number()
    .typeError("Price must be a number")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    })
    .nullable()
    .optional(),
  date: yup
    .mixed<Moment>()
    .nullable()
    .transform((value) => (value === null ? undefined : value))
    .optional(),
});

export const useEventsScene = () => {
  const [resetEventsDisabled, setResetEventsDisabled] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useDispatch();

  const isAdmin = useSelector(selectors.getIsAdmin);

  useEffect(() => {
    dispatch(actions.getEvents.request({}));
    return () => {
      dispatch(actions.resetEventsList());
      setSearchParams({});
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const isEventsListLoading = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getEvents.api)
  );

  const isEventsSearchLoading = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getEventsBySearch.api)
  );  

  const eventsList = useSelector(selectors.getEventsList);

  const defaultValues = useMemo<FormSearchEventsData>(() => ({
    location: "",
    price: undefined,
    date: undefined,
  }), []);

  const formData = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { reset } = formData;

  const watchedValues = useWatch({
    control: formData.control,
  });
  
  useEffect(() => {
    const filteredValues = Object.entries(watchedValues).reduce(
      (acc, [key, value]) => {
        if (value !== "" && value !== undefined && value !== null) {
          if (key === "date" && moment.isMoment(value)) {
            value = moment(value).format("YYYY-MM-DDTHH:mm:ss");
          }
          (acc as any)[key] = value;
        }
        return acc;
      }, {}
    );
    
    setSearchParams(filteredValues);
  }, [watchedValues, setSearchParams]);
  
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    
    if (Object.keys(params).length > 0) {
      dispatch(actions.getEventsBySearch.request(params));
      setResetEventsDisabled(false);
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const handleOpenCreateEventDialog = useCallback(() => {
    dispatch(
      actions.setDialogOpen({
        dialogType: DialogTypes.CREATE_EVENT,
        open: true,
      }),
    );
  }, [dispatch]);

  const locationsOptions = useMemo(() => 
    Object.values(locations).map(location => { 
      return { value: location, label: location };
  }), []);

  const handleResetAllEvents = useCallback(() => {
    reset(defaultValues);
    dispatch(actions.getEvents.request({}));
    setResetEventsDisabled(true);
  }, [defaultValues, dispatch, reset]);

  return {
    isAdmin,
    eventsList,
    isEventsListLoading,
    isEventsSearchLoading,
    formData,
    handleOpenCreateEventDialog,
    locationsOptions,
    handleResetAllEvents,
    resetEventsDisabled,
  };
};
