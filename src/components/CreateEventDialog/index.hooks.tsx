import { useCallback, useMemo, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/app/redux-store";
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import { locations } from "@/utils";

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
      title: yup.string().min(3, "Il titolo deve essere di almeno 3 caratteri").required("Campo obbligatorio"),
      description: yup.string().min(10, "La descrizione deve essere di almeno 10 caratteri").required("Campo obbligatorio"),
      location: yup.string().required("Campo obbligatorio"),
      date: yup.string().required("Campo obbligatorio"),
      price: yup.number().min(0, "Il prezzo non può essere negativo").optional(),
      image: yup
        .string()
        .url("Inserisci un URL valido")
        .matches(
          /\.(jpg|jpeg|png|gif|webp|svg)$/i,
          "L'immagine deve essere di uno dei seguenti formati: jpg, jpeg, png, gif, webp, svg"
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
        console.log("Submitting event data:", data);
        dispatch(actions.postEvents.request(data));
      },
      (errors) => {
        console.log("VALIDATION ERRORS:", errors);
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
