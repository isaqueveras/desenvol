import { useState } from "react";

const VotaCidade = () => {
  const [votos, adicionarVoto] = useState({
    quixada: 0,
    mombaca: 0,
    juazeiroDoNorte: 0
  });

  return (
    <>
      <div>
        <h2>Quixada: {votos.quixada}</h2>
        <h2>Mombaça: {votos.mombaca}</h2>
        <h2>Juazeiro do Norte: {votos.juazeiroDoNorte}</h2>
      </div>

      <div>
        <button
          onClick={() =>
            adicionarVoto({
              ...votos,
              quixada: votos.quixada + 1
            })
          }
        >
          Votar Quixada
        </button>

        <button
          onClick={() =>
            adicionarVoto({
              ...votos,
              mombaca: votos.mombaca + 1
            })
          }
        >
          Votar Mombaça
        </button>

        <button
          onClick={() =>
            adicionarVoto({
              ...votos,
              juazeiroDoNorte: votos.juazeiroDoNorte + 1
            })
          }
        >
          Votar Juazeiro do Norte
        </button>
      </div>
    </>
  );
};

export default VotaCidade;
