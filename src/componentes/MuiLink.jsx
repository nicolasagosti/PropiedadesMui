import { Stack,Link,Typography} from "@mui/material";
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}> 
        <Link href="#">Link</Link>
        <Link 
        href="#" 
        color='secondary'
        underline="hover"
        >Link</Link>
        <Link 
        href="#" 
        color='success'
        underline="none"
        >Link</Link>
        <Typography variant='h5'>
        <Link 
        href="#" 
        color='secondary'
        underline="none"
        >Secondary
        </Link>
        </Typography>
    </Stack>
  )
}

