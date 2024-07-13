"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export default function CustomDialogBox({
  title,
  text,
  children,
  actions,
  open,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        elevation: 10,
        sx: {
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle disableTypography>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions sx={{padding:"20px"}}>{actions}</DialogActions>
    </Dialog>
  );
}
