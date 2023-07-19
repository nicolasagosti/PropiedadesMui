import { Stack, TextField,InputAdornment} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

function Formulario() {
    const [value, setvalue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='name' variant='outlined'></TextField>
            <TextField label='name' variant='filled'></TextField>
            <TextField label='name' variant='standard'></TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small Secondary' size="small" color="secondary"></TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form input'
            value={value}
            onChange={(e) => setvalue(e.target.value)}
             error={!value}
             helperText={value? 'Ingresado Correctamente': 'campo incompleto'}/>
            <TextField label='Form input' helperText='ingrese su usuario'/>
            <TextField label='Password' type='password' helperText='ingrese su contraseña' InputProps={{endAdornment: <InputAdornment position="end"><VisibilityIcon></VisibilityIcon></InputAdornment>}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>, }}></TextField>
            <TextField label='Weight' InputProps={{endAdornment: <InputAdornment position="end">Kg</InputAdornment>,}}></TextField>
        </Stack>
    </Stack>
  )
}

export default Formulario