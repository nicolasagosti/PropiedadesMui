import { Box,TextField,MenuItem } from '@mui/material'
import React, { useEffect,useState,useRef } from 'react'

export const Select = () =>  {
    const [personas, setPersonas] = useState('')
    const isFirstRender = useRef(true);

    useEffect(() => {
      // Evita la ejecución del efecto en el primer montaje
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
        console.log({ personas });
      }, [personas]);
    const handleChange = (event) => {
            setPersonas(event.target.value)
    }

  
  return (
    <Box width='250px' margin={3}>
        <TextField 
        label='Cantidad De Personas' 
        select 
        value={personas}
        onChange={handleChange}
        fullWidth
        helperText='Ingrese la cantidad de personas'
        size='small'
        color='secondary'
        >
            <MenuItem value='entre 1 y 4 Personas'>entre 1 y 4 Personas</MenuItem>
            <MenuItem value='5 o 6 Personas'>5 o 6 Personas</MenuItem>
            <MenuItem value='7 o 8 Personas'>7 o 8 Personas</MenuItem>
            <MenuItem value='entre 9 y 12 Personas'>entre 9 y 12 Personas</MenuItem>
            <MenuItem value='13 o 14 Personas'>13 o 14 Personas</MenuItem>
            <MenuItem value='15 o 16 Personas'>15 o 16 Personas</MenuItem>
        </TextField>
    </Box>
  )
}

 