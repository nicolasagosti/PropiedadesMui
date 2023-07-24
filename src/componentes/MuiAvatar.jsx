import { Avatar, AvatarGroup, Stack } from "@mui/material";
import belu from "../imagenes/belu.jpg"; 
import ana from "../imagenes/ana.jpg"; 
import cail from "../imagenes/cail.jpg"; 
import elias from "../imagenes/Elias.jpg"; 
import floki from "../imagenes/Floki1.jpg"; 

export const MuiAvatar = () => {
  return (
    <Stack>
      <AvatarGroup max={4}>
        <Avatar src={belu}>
          NA
        </Avatar>
        <Avatar src={ana} alt="Ana">
          FA
        </Avatar>
        <Avatar src={cail}
        alt="Cail">
          PE
        </Avatar>
        <Avatar 
        src={elias}
        alt="Elias">
          PE
        </Avatar>
        <Avatar
        src={floki}
        alt="floki">
          PE
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};
