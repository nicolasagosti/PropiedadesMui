import {Stack,Skeleton,Box,Avatar,Typography} from '@mui/material'
import { useState,useEffect } from "react";
import  BeluImage  from "../imagenes/belu.jpg";

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
  return (
   <Box sx={{width: '250px'}}>
    {loading ? (
<Skeleton variant='rectangular' width={256} height={144} animation='wave'/> ) : (
<img
 src={BeluImage}
 alt='skaleton'
 width={256}
 height={144}/>
) 
    }
    <Stack direction='row' spacing={1}
    sx={{width: '100%', marginTop: '12px'}}>
        {
            loading? (
                <Skeleton variant='circular' width={40} height={40} animation='wave'/>
            ) :(
                <Avatar>V</Avatar>
            )
        }
        <Stack sx={{width: '80%'}}>
           {
            loading ? (
                <>
                <Typography variant='body1'>
                    <Skeleton variant='text' width='100%' animation='wave'/>
                </Typography>
                <Typography variant='body2'>
                    <Skeleton variant='text' width='100%' animation='wave'/>
                </Typography>
                </>
            ):(
            <>
                <Typography variant='body1'>react Mui Tutorial</Typography>
            </>
            )
           
           }
        </Stack>
    </Stack>
   </Box>
   
   
   
   
   
   
  )
}

 /* <Stack spacing={1} width='250px'>
    <Skeleton variant='text' animation='wave'/>
    <Skeleton variant='circular' width={40} height={40}/>
    <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
    </Stack>*/