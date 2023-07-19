import "./App.css";
import { Stack } from "@mui/material";
import { MuiAccordion } from "./componentes/MuiAccordion";

/*import { MuiCard } from "./componentes/MuiCard";
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
    <Stack className="App" display="flex">
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
      <MuiCard></MuiCard>*/}
      <MuiAccordion></MuiAccordion>
      </Stack>
  );
}

export default App;
