import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserRoles } from "@/models/UserFe";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/app/redux-store";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const useRegisterForm = () => {
  const dispatch = useDispatch();

  const schema = useMemo(() => {
    return yup.object().shape({
      name: yup
        .string()
        .optional()
        .min(3, "Il nome deve contenere almeno 3 caratteri"),
      email: yup
        .string()
        .email()
        .required("L'email è obbligatoria"),
      password: yup
        .string()
        .min(8, "La password deve contenere minimo 8 caratteri")
        .required("La password è obbligatoria"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "La password deve essere uguale"),
    }) as yup.ObjectSchema<RegisterFormData>;
  },[]);

  const userRoleOptions = useMemo(
    () =>
      Object.values(UserRoles).map((role) => ({
        value: role.toString(),
        label: role == UserRoles.ADMIN ? "Amministratore" : "Utente",
      })),
    [],
  );

  const formData = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const isPostUserAjaxLoading = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.postUsers.api),
  );

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log(data);
        dispatch(
          actions.postUsers.request({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        );
      }),
    [handleSubmit, dispatch],
  );

  return {
    userRoleOptions,
    formData,
    isPostUserAjaxLoading,
    triggerSubmit,
    submitDisabled,
  };
};
