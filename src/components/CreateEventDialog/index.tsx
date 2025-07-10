import { memo } from "react";
import { useCreateEventDialog } from "./index.hooks";
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
import { FormDatePicker } from "@/components/_form/FormDatePicker";
import { FormSelect } from "../_form/FormSelect";

export const CreateEventDialog = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    isPostEventsAjaxLoading,
    isCreateEventDialogOpen,
    handleCloseDialog,
    locationsOptions,
  } = useCreateEventDialog();

  return (
    <FormProvider {...formData}>
      <Dialog open={isCreateEventDialogOpen} onClose={handleCloseDialog}>
        <form onSubmit={triggerSubmit}>
          <DialogTitle>Crea Evento</DialogTitle>
          <DialogContent>
            <Stack spacing={3} sx={{ py: 1 }}>
              <FormTextField name="title" label="Titolo" />
              <FormTextField 
                name="description" 
                label="Description" 
                multiline 
                rows={4}
                placeholder="Describe the event in detail..."
              />
              <FormSelect 
                name='location' 
                label='Locations' 
                options={locationsOptions}
              />
              <FormTextField 
                name="price" 
                label="Price" 
                type="number" 
              />
              <FormTextField 
                name="image" 
                label="Image URL" 
                placeholder="https://esempio.com/immagine.jpg"
                type="url"
              />
              <FormDatePicker name="date" label="Date" />
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
              loading={isPostEventsAjaxLoading}
            >
              {"Save"}
            </AppButton>
          </DialogActions>
        </form>
      </Dialog>
    </FormProvider>
  );
});

CreateEventDialog.displayName = "CreateEventDialog";
