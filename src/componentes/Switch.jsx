import {Box,FormControlLabel, Switch} from '@mui/material'
import { useEffect,useState,useRef } from "react";

export const ElSwitch = () => {
    const [checked, setChecked] = useState(false)
    const primeraVez = useRef(true)

    useEffect(() => {
    if(primeraVez.current){
        primeraVez.current = false
        return;
    }else{
        console.log(checked) 
    }
    }, [checked])
    

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label='Dark mode' control={<Switch checked={checked} 
        onChange={handleChange}
        color='secondary'
        size='small'
        />} />
    </Box>
  )
}

