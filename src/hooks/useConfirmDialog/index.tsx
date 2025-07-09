import { ReactNode, useCallback, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

type useConfirmDialogProps = {
  onConfirm: (e?: React.MouseEvent) => void;
  onCancel: () => void;
  content: ReactNode;
  cancelText?: string;
  confirmText?: string;
};

const useConfirmDialog = ({
  onConfirm,
  onCancel,
  content,
  cancelText,
  confirmText,
}: useConfirmDialogProps) => {
  const [open, setOpen] = useState(false);

  const show = useCallback(() => {
    setOpen(true);
  }, []);

  const onConfirmInternal = useCallback(() => {
    setOpen(false);
    onConfirm();
  }, [onConfirm]);

  const onCancelInternal = useCallback(() => {
    setOpen(false);
    onCancel();
  }, [onCancel]);

  return {
    open,
    show,
    dialog: (
      <Dialog open={open}>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            variant="outlined"
            onClick={(e)=>{
              e.stopPropagation();
              onCancelInternal();
            }}
          >
            {cancelText ?? "Annulla"}
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={(e)=>{
              e.stopPropagation();
              onConfirmInternal();
            }}
          >
            {confirmText ?? "Conferma"}
          </Button>
        </DialogActions>
      </Dialog>
    ),
  };
};

export default useConfirmDialog;
