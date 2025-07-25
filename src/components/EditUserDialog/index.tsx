import { memo } from "react";
import { FormProvider } from "react-hook-form";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";
import { AppButton } from "@/components/AppButton";
import { useEditUserDialog } from "./index.hooks";
import { FormSelect } from "../_form/FormSelect";

export const EditUserDialog = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    isEditingUser,
    isEditUserDialogOpen,
    handleCloseDialog,
    userRoleOptions,
  } = useEditUserDialog();

  return (
    <FormProvider {...formData}>
      <Dialog
        open={isEditUserDialogOpen}
        onClose={handleCloseDialog}
      >
        <form onSubmit={triggerSubmit}>
          <DialogTitle>{"Edit User"}</DialogTitle>
          <DialogContent>
            <Stack spacing={3} sx={{ py: 1 }}>
              <FormTextField name="name" label="Name" />
              <FormTextField name="email" label="Email" type="email" />
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
              loading={isEditingUser}
            >
              {"Save"}
            </AppButton>
          </DialogActions>
        </form>
      </Dialog>
    </FormProvider>
  );
});

EditUserDialog.displayName = "EditUserDialog";
