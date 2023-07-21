import {BottomNavigation,BottomNavigationAction} from '@mui/material'
import Home from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";

export const MuiBottonNavigation = () => {
const [value, setValue] = useState(0)
  return (
    <BottomNavigation
     sx={{width: '100%', position: 'absolute', bottom: 0}}
     value={value}
     onChange={(event,newValue)=>{
        setValue(newValue)
     }}
     showLabels
     >
    <BottomNavigationAction label='Home' icon={<Home></Home>}> </BottomNavigationAction>
    <BottomNavigationAction label='Corazon' icon={<FavoriteIcon/>}> </BottomNavigationAction>
    <BottomNavigationAction label='Edit' icon={  <EditIcon/>}> </BottomNavigationAction>
    
  
    </BottomNavigation>
  )
}
