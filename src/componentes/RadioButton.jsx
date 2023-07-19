import { Box, FormControl, FormLabel,FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { useEffect,useState,useRef } from "react";

function RadioButton() {
    const [value, setvalue] = useState('')
    const PrimeraVez = useRef(true)
    useEffect(() => {
        if(PrimeraVez.current){
            PrimeraVez.current = false;
            return;
        }
        console.log({value}); 
    }, [value])
    
    const handleChange = (event) => {
       setvalue(event.target.value)
    }
  return (
    <Box>
        <FormControl>
            <FormLabel id='job-experience-group-label'>
                Cantidad De Personas
            </FormLabel>
            <RadioGroup name='job-experience-group' aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChange}>
            <FormControlLabel control={<Radio />}label='0-4' value='0-4'/>
            <FormControlLabel control={<Radio />}label='5-6' value='5-6'/>
            <FormControlLabel control={<Radio />}label='7-8' value='7-8'/>
            </RadioGroup>
        </FormControl>
        <FormControl>
            <FormLabel id='job-experience-group-label'>
                Cantidad De Personas
            </FormLabel>
            <RadioGroup name='job-experience-group' aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChange}
            row>
            <FormControlLabel control={<Radio />}label='0-4' value='0-4'/>
            <FormControlLabel control={<Radio />}label='5-6' value='5-6'/>
            <FormControlLabel control={<Radio />}label='7-8' value='7-8'/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default RadioButton 