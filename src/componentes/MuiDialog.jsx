import {Stack,Button,Dialog, DialogTitle,DialogContent, DialogContentText,DialogActions}from '@mui/material'
import { useState } from "react";

export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Button onClick={() =>setOpen(true)}>Open dialog</Button>
    <Dialog
     aria-labelledby='dialog-title'
    aria-describedby='dialog-description'
    open={open}
    onClose={()=>setOpen(false)}>
        <DialogTitle id='dialog-title' >
            Submit the test?
        </DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quidem harum, ullam tempore aut temporibus at doloribus dolor eius minima odio modi molestiae beatae pariatur eaque nulla, nemo veniam natus.</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}
