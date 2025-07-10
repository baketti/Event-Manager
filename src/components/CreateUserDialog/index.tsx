import { memo } from "react";
import { useCreateUserDialog } from "./index.hooks";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";
import { AppButton } from "@/components/AppButton";
import { FormProvider } from "react-hook-form";
import { FormSelect } from "../_form/FormSelect";

export const CreateUserDialog = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    isPostUsersByAdminAjaxLoading,
    isCreateUserDialogOpen,
    handleCloseDialog,
    userRoleOptions,
  } = useCreateUserDialog();

  return (
    <FormProvider {...formData}>
      <Dialog open={isCreateUserDialogOpen} onClose={handleCloseDialog}>
        <form onSubmit={triggerSubmit}>
          <DialogTitle>{"Create User"}</DialogTitle>
          <DialogContent>
            <Stack spacing={3} sx={{ py: 1 }}>
              <FormTextField name="name" label="Name" />
              <FormTextField name="email" label="Email" type="email" />
              <FormTextField name="password" label="Password" type="password" />
              <FormSelect name="role" label="Role" options={userRoleOptions} />
            </Stack>
          </DialogContent>
          <DialogActions>
            <AppButton
              variant="outlined"
              color="secondary"
              onClick={handleCloseDialog}
            >
              {"Cancel"}
            </AppButton>
            <AppButton
              variant="contained"
              type="submit"
              disabled={submitDisabled}
              loading={isPostUsersByAdminAjaxLoading}
            >
              {"Save"}
            </AppButton>
          </DialogActions>
        </form>
      </Dialog>
    </FormProvider>
  );
});

CreateUserDialog.displayName = "CreateUserDialog";
