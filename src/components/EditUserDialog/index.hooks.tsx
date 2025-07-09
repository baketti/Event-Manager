import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { actions, selectors } from "@/app/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import { UserRoles } from "@/models/UserFe";

export type EditUserDialogData = {
  name: string;
  email: string;
  role: UserRoles;
};

export const useEditUserDialog = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectors.getUsersList);
  const editUserId = useSelector(selectors.getEditUserId);
  const editUser = useMemo(
    () => users.find((user) => user.id === editUserId),
    [users, editUserId],
  );

  const schema = useMemo(() => {
    return yup.object({
      name: yup.string().min(3, "Il nome deve essere di almeno 3 caratteri").required("Campo obbligatorio"),
      email: yup.string().email("Email non valida").required("Campo obbligatorio"),
      role: yup.mixed<UserRoles>()
      .oneOf(Object.values(UserRoles), "Ruolo non valido")
      .required("Campo obbligatorio"),
    });
  }, []);

  const formData = useForm<EditUserDialogData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: editUser?.name || "",
      email: editUser?.email || "",
      role: editUser?.role,
    },
  });

  const isEditingUser: boolean = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchUsersByUserId.api),
  );

  const isEditUserDialogOpen = useSelector(
    selectors.getIsDialogOpen)[DialogTypes.EDIT_USER];

  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
    reset,
  } = formData;

  const submitDisabled = (isSubmitted && !isValid) || isEditingUser;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchUsersByUserId.request({
            userId: editUserId,
            ...data,
          }),
        );
      }),
    [handleSubmit, editUserId, dispatch],
  );

  useEffect(() => {
    reset({
      name: editUser?.name || "",
      email: editUser?.email || "",
      role: editUser?.role,
    });
  }, [reset, editUser]);

  const handleCloseDialog = useCallback(() => {
    dispatch(
      actions.setDialogOpen({
        dialogType: DialogTypes.EDIT_USER,
        open: false,
      }),
    );
    dispatch(actions.setEditUserId(null));
  }, [dispatch]);

  const userRoleOptions = useMemo(() => 
    Object.values(UserRoles).map((role) => ({ value: role, label: role })
  ), []);

  return {
    formData,
    triggerSubmit,
    submitDisabled,
    isEditingUser,
    isEditUserDialogOpen,
    handleCloseDialog,
    userRoleOptions,
  };
};
