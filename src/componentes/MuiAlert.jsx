import { Stack, Alert, AlertTitle, Button, accordionActionsClasses } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Esto es un alerta de error</Alert>
      <Alert severity="warning">Esto es un alerta de error</Alert>
      <Alert severity="info">Esto es un alerta de error </Alert>
      <Alert severity="success">Esto es un alerta de error</Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle> Esto es un alerta de error
      </Alert>
      <Alert variant="outlined" severity="warning">
        <AlertTitle>Warning</AlertTitle> Esto es un alerta de error
      </Alert>
      <Alert variant="outlined" severity="info">
        <AlertTitle>info</AlertTitle>
        Esto es un alerta de error{" "}
      </Alert>
      <Alert variant="outlined" severity="success">
        <AlertTitle>exitoso!</AlertTitle>
        Esto es un alerta de error
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close Alert")}
      >
        <AlertTitle>Error</AlertTitle> Esto es un alerta de error
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle> Esto es un alerta de error
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>info</AlertTitle>
        Esto es un alerta de error{" "}
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />
    }
    action={
        <Button color="inherit" size="small">
            UNDO
        </Button>
    }
      >
        <AlertTitle>exitoso!</AlertTitle>
        Esto es un alerta de error
      </Alert>
    </Stack>
  );
};
