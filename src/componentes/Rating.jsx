import {Stack,Rating} from '@mui/material'
import WifiOffIcon from '@mui/icons-material/WifiOff';
import WifiIcon from '@mui/icons-material/Wifi';
import { useEffect,useState, useRef } from "react";



export const MRating = () => {
    const [puntaje, setPuntaje] = useState(null)
    const primeraVez = useRef(true)
useEffect(() => {
    if(primeraVez.current){
        primeraVez.current = false
        return;
    }else{
        console.log(puntaje)
    }
}, [puntaje])
const handleChange = (
    event,
    newValue
    ) => {
setPuntaje(newValue)
}
  return (
    <Stack>
        <Rating
         value={puntaje}
         icon={<WifiIcon></WifiIcon>}
         emptyIcon={<WifiOffIcon></WifiOffIcon>}
         onChange={handleChange}
         precision={0.25}
         >
        </Rating>
    </Stack>
  )
}

