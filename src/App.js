import "./App.css";
import { Stack } from "@mui/material";
import { MuiSnackBar } from "./componentes/MuiSnackBar";
import { MuiDialog } from "./componentes/MuiDialog";
import { MuiProgress } from "./componentes/MuiProgress";
import { MuiSkeleton } from "./componentes/MuiSkeleton";
import { MuiLoadingButton } from "./componentes/MuiLoadingButton";

/*
import { MuiList } from "./componentes/MuiList";
import { MuiChip } from "./componentes/MuiChip";
import { MuiTooltip } from "./componentes/MuiTooltip";
import { MuiTable } from "./componentes/MuiTable";
import { MuiAlert } from "./componentes/MuiAlert";
import { MuiAvatar } from "./componentes/MuiAvatar";
import { MuiBadge } from "./componentes/MuiBadge";
import { MuiBottonNavigation } from "./componentes/MuiBottonNavigation";
import { MuiMigaja } from "./componentes/MuiMigaja";
import { MuiNavbar } from "./componentes/MuiNavbar";
import { MuiDrawer } from "./componentes/MuiDrawer";
import MuiSpeedDial from "./componentes/MuiSpeedDial";
import { MuiLink } from "./componentes/MuiLink";
import { MuiImageList } from "./componentes/MuiImageList";
import { MuiAccordion } from "./componentes/MuiAccordion";
import { MuiCard } from "./componentes/MuiCard";
import { OrganizarElementos } from "./componentes/OrganizarElementos";
import { Mautocomplete } from "./componentes/Mautocomplete";
import { MRating } from "./componentes/Rating";
import { ElSwitch } from "./componentes/Switch";
import Iconos from "./componentes/Iconos";
import Botenes from "./componentes/Botenes";
import Formulario from "./componentes/Formulario";
import { Select } from "./componentes/select";
import RadioButton from "./componentes/RadioButton";
import { FCheckBox } from "./componentes/FcheckBox";
*/

function App() {
  return (
    <Stack margin={4}>
      {/*<Stack display="Block" className="Contenedor-Botones">
        <h1>Contenedor de Botones</h1>
        <Botenes></Botenes>
  </Stack>
      <Stack margin={2} padding={2} className="Contenedor-Iconos">
        <h1>Contenedor de Iconos</h1>
        <Iconos></Iconos>
      </Stack>
      <Stack className="Contenedor-Formulario">
        <Formulario></Formulario>
      </Stack>
      <Select></Select>
      <Stack margin={2}>
        <RadioButton></RadioButton>
      </Stack>
      <Stack margin={2}>
        <FCheckBox/>
      </Stack>
      <ElSwitch />
      <MRating/>
      <Mautocomplete/>
      <OrganizarElementos />
      <MuiCard></MuiCard>
      <MuiAccordion />
      <MuiImageList />
      <MuiLink/>
      <MuiNavbar/>
      <MuiMigaja/>
      <MuiDrawer/>
      <MuiSpeedDial/>
      <MuiBottonNavigation/>
      <MuiBadge></MuiBadge>
      <MuiAvatar/>
      <MuiChip/>
      <MuiList/>
      <MuiTooltip/>
      <MuiTable/>
      <MuiAlert/>
       <MuiSnackBar/>
     <MuiDialog/>
     <MuiProgress/>*/}
     <MuiSkeleton/>
     <MuiLoadingButton/>
      </Stack>
  );
}

export default App;
