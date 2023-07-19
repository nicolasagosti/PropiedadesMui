import { Stack, Autocomplete, TextField} from "@mui/material";
import { useEffect, useState, useRef} from "react";


const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript','React']

const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

export const Mautocomplete = () => {
    const [value, setvalue] = useState(null)
    const [skill, setSkill] = useState(null)
    const primVez = useRef(true)
    const frst = useRef(true)

    useEffect(() => {
        if(primVez.current){
            primVez.current = false
            return;
        }else{
            console.log({value})
        }
    }, [value])
    useEffect(() => {
        if(frst.current){
            frst.current = false
            return;
        }else{
            console.log({skill})
        }
    }, [skill])
    

   
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete 
        options={skills}
        renderInput={(params)=><TextField {...params} label='skills'/>}
        value={value}
        onChange={(event,newValue)=>setvalue(newValue)}
        freeSolo // para agregar el texto que querramos
        />
         <Autocomplete 
        options={skillsOptions}
        renderInput={(params)=><TextField {...params} label='skills'/>}
        value={skill}
        onChange={(event,newValue)=>setSkill(newValue)}
        />
    </Stack>
  )
}

