import "./styles.css";

// import Grupo from "./components/vingadores/Grupo";
// import Heroi from "./components/vingadores/Heroi";
// import IMC from "./components/imc";
import Disciplina from "./components/universidade/Disciplina";
import Estudante from "./components/universidade/Estudante";

export default function App() {
  return (
    // <IMC altura="160" peso="68" />;
    // <Grupo titulo="Vingadores">
    //   <Heroi nome="Capitao America" />
    // </Grupo>
    <Disciplina titulo="Fundamentos de Programação">
      <Estudante
        nome="Jefferson"
        curso="Design Digital"
        universidade="UFC Quixadá"
      />
      <br />
      <Estudante
        nome="Wladimir"
        curso="Design Digital"
        universidade="UFC Quixadá"
      />
    </Disciplina>
  );
}
