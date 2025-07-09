import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/app/redux-store";
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import { locations } from "@/utils";

export type EditEventDialogData = {
  title: string;
  description: string;
  location: string;
  price: number;
  date: string;
  image: string;
};

export const useEditEventDialog = () => {
  const dispatch = useDispatch();

  const events = useSelector(selectors.getEventsList);
  const editEventId = useSelector(selectors.getEditEventId);
  const editEvent = useMemo(
    () => events.find((event) => event.id === editEventId),
    [events, editEventId],
  );

  const schema = useMemo(() => {
    return yup.object({
      title: yup.string().required("Campo obbligatorio"),
      description: yup.string().required("Campo obbligatorio"),
      location: yup.string().required("Campo obbligatorio"),
      price: yup
        .number()
        .typeError("Inserire un numero")
        .required("Campo obbligatorio"),
      date: yup.string().required("Campo obbligatorio"),
      image: yup.string().url("URL non valido").required("Campo obbligatorio"),
    });
  }, []);

  const formData = useForm<EditEventDialogData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: editEvent?.title || "",
      description: editEvent?.description || "",
      location: editEvent?.location || "",
      price: editEvent?.price || 0,
      date: editEvent?.date || "",
      image: editEvent?.image || "",
    },
  });

  const isPatchEventsByEventIdAjaxLoading: boolean = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchEventsByEventId.api),
  );

  const isEditEventDialogOpen = useSelector(
    selectors.getIsDialogOpen
  )[DialogTypes.EDIT_EVENT];

  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
    reset,
  } = formData;

  const submitDisabled = (isSubmitted && !isValid) || isPatchEventsByEventIdAjaxLoading;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchEventsByEventId.request({
            eventId: editEventId,
            ...data,
          })
        );
      }),
    [handleSubmit, editEventId, dispatch],
  );

  useEffect(() => {
    reset({
      title: editEvent?.title || "",
      description: editEvent?.description || "",
      location: editEvent?.location || "",
      price: editEvent?.price || 0,
      date: editEvent?.date || "",
      image: editEvent?.image || "",
    });
  }, [reset, editEvent]);

  const handleCloseDialog = useCallback(() => {
    dispatch(
      actions.setDialogOpen({
        dialogType: DialogTypes.EDIT_EVENT,
        open: false,
      })
    );
    dispatch(actions.setEditEventId(null));
  }, [dispatch]);

   const locationsOptions = useMemo(() => 
      Object.values(locations).map(location => { 
        return { value: location, label: location };
    }), []);

  return {
    formData,
    triggerSubmit,
    submitDisabled,
    isPatchEventsByEventIdAjaxLoading,
    isEditEventDialogOpen,
    handleCloseDialog,
    locationsOptions,
  };
};
