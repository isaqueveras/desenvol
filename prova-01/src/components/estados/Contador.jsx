import { useState } from "react";

const Contador = () => {
  const [contador, addContador] = useState(0);

  const contar = () => addContador(contador + 1);

  return (
    <div>
      <h2>Contador {contador}</h2>
      <button onClick={contar} type="button">
        Acrescentar
      </button>
    </div>
  );
};

export default Contador;
