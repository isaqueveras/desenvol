import Questao01 from "./components/Questao01";
import Questao02 from "./components/Questao02";

export default function App() {
  return (
    <div className="p-0">
      <div className="container w-100 h-100">
        <Questao01 />
        <br /><hr /><br />
        <Questao02 />
      </div>
    </div>
  );
}
