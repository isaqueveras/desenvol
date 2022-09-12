import "./styles.css";

import Grupo from "./components/vingadores/Grupo";
import Heroi from "./components/vingadores/Heroi";
// import IMC from "./components/imc";

export default function App() {
  return (
    // <IMC altura="160" peso="68" />;
    <Grupo titulo="Vingadores">
      <Heroi nome="Capitao America" />
    </Grupo>
  );
}
