import {Stack,Chip,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useState } from "react";

export const MuiChip = () => {
    const handleChange = () => {
        console.log('Handle Change')
    }
    const handleDelete = (chipToDelete) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }
    const [chips, setChips] = useState(['Chip 1','Chip 2','Chip 3'])
  return (
    <Stack direction='row' spacing={0.8}>
        <Chip label='Chip' size='small' color='primary' icon={<FaceIcon/>}></Chip>
        <Chip label='Chip Outlined' size='small' color='secondary' avatar={<Avatar>V</Avatar>}></Chip>
        <Chip label='Click' color='success' onClick={handleChange}/>
        <Chip label='error' color='error' onClick={()=>alert('Click Delete')} onDelete={()=>alert('Borron Y Cuenta Nueva')}></Chip>
        {chips.map(chip=>(
        <Chip label={chip} key={chip} onDelete={()=>handleDelete(chip)}></Chip>))
}
    </Stack>
   
  )
}
