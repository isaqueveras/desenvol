import { useState } from "react";

const Sena = () => {
  const [mostrar, setMostrar] = useState(true);

  const handle = () => setMostrar(!mostrar);

  return (
    <div>
      {mostrar && (
        <img
          alt="imagem do Sena"
          src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/David-Sena-Oliveira-Final1-113x150.png"
        />
      )}
      <br />
      <button type="button" onClick={handle}>
        {mostrar ? "Esconder o Sena" : "Mostrar o Sena"}
      </button>
    </div>
  );
};

export default Sena;
