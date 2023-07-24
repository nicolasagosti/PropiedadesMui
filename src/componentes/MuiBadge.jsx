import { Stack,Badge } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack 
    spacing={2}
    direction='row'
    >
        <Badge badgeContent={5} color="primary">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={8} color="secondary">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={1} color="error" invisible={true}>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={500} color="error" max={999}>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={1150} color="success">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={0} showZero color="success">
            <MailIcon/>
        </Badge>

    </Stack>
  )
}
