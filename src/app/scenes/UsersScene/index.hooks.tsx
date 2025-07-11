import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback, useRef } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { actions, selectors } from "@/app/redux-store";
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useConfirmDialog from "@/hooks/useConfirmDialog";

export const useUsersScene = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getUsersList);
  const me = useSelector(selectors.getUser);

  const editUserIdRef = useRef<number | null>(null);

  const handleOpenCreateUserDialog = useCallback(() => {
    dispatch(
      actions.setDialogOpen({
        dialogType: DialogTypes.CREATE_USER,
        open: true,
      }),
    );
  }, [dispatch]);

  const handleOpenEditUserDialog = useCallback((userId: number) => {
    dispatch(actions.setEditUserId(userId));
    dispatch(
      actions.setDialogOpen({
        dialogType: DialogTypes.EDIT_USER,
        open: true,
      }),
    );
  }, [dispatch]);

  const handleDeleteUser = useCallback(() => {
    if (editUserIdRef.current !== null) {
      dispatch(
        actions.deleteUsersByUserId.request({ userId: editUserIdRef.current }),
      );
    }
  }, [dispatch]);

    const { show: handleOpenDeleteUserDialog, dialog: DeleteUserDialog } = useConfirmDialog({
      onConfirm: handleDeleteUser,
      onCancel: () => null,
      content: "Are you sure you want to delete this user?",
    });

  useEffect(() => {
    dispatch(actions.getUsers.request({}));
  }, [dispatch]);

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", headerName: "ID", minWidth: 60 },
      { field: "name", headerName: "Name", flex: 1, minWidth: 120 },
      { field: "email", headerName: "Email", flex: 1.5, minWidth: 180 },
      { field: "role", headerName: "Role", flex: 1, minWidth: 100 },
      {
        field: "editUser",
        headerName: "",
        renderCell: (params) => (
          <IconButton
            color="warning"
            onClick={() => handleOpenEditUserDialog(params.row.id)}
          >
            <EditIcon />
          </IconButton>
        ),
      },
      {
        field: "deleteUser",
        headerName: "",
        renderCell: (params) => (
          <IconButton
            color="error"
            onClick={() => {
              editUserIdRef.current = params.row.id;
              handleOpenDeleteUserDialog();
            }}
          >
            <DeleteIcon />
          </IconButton>
        ),
      },
    ],
    [handleOpenEditUserDialog, handleOpenDeleteUserDialog],
  );

  const usersRows = useMemo(() =>
    users?.filter((user) => user.id !== me?.id)
    ?.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })) ?? [], [me?.id, users]);

  return { 
    columns, 
    usersRows, 
    DeleteUserDialog,
    handleOpenCreateUserDialog,
  };
};
