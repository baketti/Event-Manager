import { useCallback, useMemo, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/app/redux-store";
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import { UserRoles } from "@/models/UserFe";

export type CreateUserDialogData = {
  name: string;
  email: string;
  password: string;
  role: UserRoles;
};

export const useCreateUserDialog = () => {
    const dispatch = useDispatch();

    const schema = useMemo(() => {
      return yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Not valid email").required("Email is required"),
        password: yup.string().required("Password is required"),
        role: yup
          .mixed<UserRoles>()
          .oneOf(Object.values(UserRoles))
          .required("Role is required"),
      });
    }, []);

    const formData = useForm<CreateUserDialogData>({
      resolver: yupResolver(schema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
        role: undefined,
      },
    });

    const {
      reset,
      handleSubmit,
      formState: { isValid, isSubmitted },
    } = formData;

    const isPostUsersByAdminAjaxLoading = useSelector(
      selectors.getAjaxIsLoadingByApi(actions.postUsersByAdmin.api)
    );

    const submitDisabled = (isSubmitted && !isValid) || isPostUsersByAdminAjaxLoading;

    const isCreateUserDialogOpen = useSelector(selectors.getIsDialogOpen)[
      DialogTypes.CREATE_USER
    ];

    const triggerSubmit = useMemo(
      () =>
        handleSubmit(
          (data) => {
            dispatch(actions.postUsersByAdmin.request(data));
          },
        ),
      [dispatch, handleSubmit]
    );

    const handleCloseDialog = useCallback(() => {
      dispatch(
        actions.setDialogOpen({
          dialogType: DialogTypes.CREATE_USER,
          open: false,
        })
      );
      reset({
        name: "",
        email: "",
        password: "",
        role: undefined,
      });
    }, [dispatch, reset]);

    useEffect(() => {
      reset({
        name: "",
        email: "",
        password: "",
        role: undefined,
      });
    }, [reset]);

    const userRoleOptions = useMemo(() => 
        Object.values(UserRoles).map((role) => ({ value: role, label: role })
      ), []);

    return {
      formData,
      triggerSubmit,
      submitDisabled,
      isPostUsersByAdminAjaxLoading,
      isCreateUserDialogOpen,
      handleCloseDialog,
      userRoleOptions,
    };
};
