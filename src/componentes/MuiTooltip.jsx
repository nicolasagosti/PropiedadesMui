import { Stack, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const MuiTooltip = () => {
  return (
    <Stack direction='row' m={3}>
      <Tooltip title="Delete" placement="right" enterDelay={300} leaveDelay={800}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
