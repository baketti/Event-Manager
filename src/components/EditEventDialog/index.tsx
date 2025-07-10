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
import { useEditEventDialog } from "./index.hooks";
import { FormDatePicker } from "@/components/_form/FormDatePicker";
import { FormSelect } from "../_form/FormSelect";

export const EditEventDialog = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    isPatchEventsByEventIdAjaxLoading,
    isEditEventDialogOpen,
    handleCloseDialog,
    locationsOptions,
  } = useEditEventDialog();

  return (
    <FormProvider {...formData}>
      <Dialog
        open={isEditEventDialogOpen}
        onClose={handleCloseDialog}
      >
        <form onSubmit={triggerSubmit}>
          <DialogTitle>{"Edit Event"}</DialogTitle>
          <DialogContent>
            <Stack spacing={3} sx={{ py: 1 }}>
              <FormTextField name="title" label="Title" />
              <FormTextField name="description" label="Description" multiline rows={4} />
              <FormDatePicker name="date" label="Date" fullWidth />
              <FormSelect 
                name='location' 
                label='Locations' 
                options={locationsOptions}
              />
              <FormTextField name="price" label="Price" type="number" />
              <FormTextField name="image" label="Image URL" />
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
              loading={isPatchEventsByEventIdAjaxLoading}
            >
              {"Save"}
            </AppButton>
          </DialogActions>
        </form>
      </Dialog>
    </FormProvider>
  );
});

EditEventDialog.displayName = "EditEventDialog";
