import "./styles.css";

// import Grupo from "./components/vingadores/Grupo";
// import Heroi from "./components/vingadores/Heroi";
// import IMC from "./components/imc";
import Disciplina from "./components/universidade/Disciplina";
import Estudante from "./components/universidade/Estudante";
import Contador from "./components/estados/Contador";

const dizendoOi = (nome) => alert(`Oi, sou ${nome}!`);

const GrupoDisciplina = () => {
  return (
    <Disciplina titulo="Fundamentos de Programação">
      <Estudante
        nome="Isaque Veras"
        curso="Ciencia da Computação"
        universidade="UFC Quixadá"
        digaOi={dizendoOi}
      />
      <br />
      <Estudante
        nome="João"
        curso="Engenharia da Computação"
        universidade="UFC Quixadá"
        digaOi={dizendoOi}
      />
    </Disciplina>
  );
};

export default function App() {
  return (
    // <IMC altura="160" peso="68" />;
    // <Grupo titulo="Vingadores">
    //   <Heroi nome="Capitao America" />
    // </Grupo>
    // <GrupoDisciplina />
    <Contador />
  );
}
