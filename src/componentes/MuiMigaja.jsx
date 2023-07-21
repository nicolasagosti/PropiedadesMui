import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MuiMigaja = () => {
  return (
    <Box mt={8}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small"/>}
      maxItems={2}
      itemsAfterCollapse={1}>
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
