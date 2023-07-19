import { Stack, Button, ButtonGroup} from "@mui/material";

function Botenes() {
  return (
    <Stack spacing={2} margin={3} >
      <Stack display='Block' spacing={1} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={1} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Succes
        </Button>
      </Stack>
      <Stack display='Block' spacing={2} direction='row'>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant="contained" color="warning" orientation="vertical">
          <Button>4 o MENOS</Button>
          <Button>5 o 6</Button>
          <Button>7 o 8</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color='error' orientation="vertical">
          <Button>4 o MENOS</Button>
          <Button>5 o 6</Button>
          <Button>7 o 8</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="secondary" orientation="vertical">
          <Button>4 o MENOS</Button>
          <Button>5 o 6</Button>
          <Button>7 o 8</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default Botenes;
