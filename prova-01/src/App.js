import Questao01 from "./components/Questao01";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";

export default function App() {
  return (
    <div className="p-0">
      <div className="container">
        <Questao01 />
        <br /><hr /><br />
        <Questao02 />
        <br /><hr /><br />
        <Questao03 />
        <br /><hr /><br />
      </div>
    </div>
  );
}
