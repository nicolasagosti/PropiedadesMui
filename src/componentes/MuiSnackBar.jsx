import { Snackbar, Button, Alert, Stack } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

export const MuiSnackBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack direction='row' justifyContent='center'  >
      <Button sx={{ maxWidth: '150px' }} onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form submit successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      ></Snackbar>
      <Snackbar autoHideDuration={4000} open={open} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted Successfully!
        </SnackbarAlert>
      </Snackbar>
    </Stack>
  );
};
