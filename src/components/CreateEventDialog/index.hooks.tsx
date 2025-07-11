import { useCallback, useMemo, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/app/redux-store";
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import { locations } from "@/utils";
import moment from "moment";

export type CreateEventDialogData = {
  title: string;
  description: string;
  location: string;
  date: string;
  price?: number;
  image?: string;
};

export const useCreateEventDialog = () => {
  const dispatch = useDispatch();

  const schema = useMemo(() => {
    return yup.object({
      title: yup
        .string()
        .min(3, "Title must be at least 3 characters long") 
        .required("This field is required"),
      description: yup
        .string()
        .min(10, "Description must be at least 10 characters long")
        .required("This field is required"),
      location: yup
        .string()
        .required("This field is required"), 
      date: yup
        .string()
        .required("This field is required"), 
      price: yup
        .number()
        .min(0, "Price cannot be negative") 
        .optional(),
      image: yup
        .string()
        .url("Please enter a valid URL")
        .matches(
          /\.(jpg|jpeg|png|gif|webp|svg)$/i,
          "Image must be in one of the following formats: jpg, jpeg, png, gif, webp, svg" 
        )
        .optional(),
    });
  }, []);

  const formData = useForm<CreateEventDialogData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      date: "",
      price: undefined,
      image: "",
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = formData;

  const isPostEventsAjaxLoading = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.postEvents.api),
  );

  const submitDisabled = (isSubmitted && !isValid) || isPostEventsAjaxLoading;

  const isCreateEventDialogOpen = useSelector(selectors.getIsDialogOpen)[
    DialogTypes.CREATE_EVENT
  ];

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(actions.postEvents.request({
          ...data,
          date: moment(data.date).format("YYYY-MM-DDTHH:mm:ss"),
        }));
      }
    ),
    [dispatch, handleSubmit],
  );

  const handleCloseDialog = useCallback(() => {
    dispatch(
      actions.setDialogOpen({
        dialogType: DialogTypes.CREATE_EVENT,
        open: false,
      }),
    );
    reset({
      title: "",
      description: "",
      location: "",
      date: "",
      price: undefined,
      image: "",
    });
  }, [dispatch, reset]);

  useEffect(() => {
    reset({
      title: "",
      description: "",
      location: "",
      date: "",
      price: undefined,
      image: "",
    });
  }, [reset]);

  const locationsOptions = useMemo(() => 
    Object.values(locations).map(location => { 
        return { value: location, label: location };
    }), []);

  return {
    formData,
    triggerSubmit,
    submitDisabled,
    isPostEventsAjaxLoading,
    isCreateEventDialogOpen,
    handleCloseDialog,
    locationsOptions,
  };
};
