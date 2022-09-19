import { useState } from "react";

const VotaCidade = () => {
  const [votos, adicionarVoto] = useState({
    quixada: 0,
    mombaca: 0,
    juazeiroDoNorte: 0
  });

  const cidadeMaiorVotacao = () => {
    if (
      votos.juazeiroDoNorte > votos.mombaca &&
      votos.juazeiroDoNorte > votos.quixada
    ) {
      return "Juazeiro do Norte ganhou!";
    } else if (
      votos.mombaca > votos.juazeiroDoNorte &&
      votos.mombaca > votos.quixada
    ) {
      return "Mombaça ganhou!";
    } else if (
      votos.quixada > votos.juazeiroDoNorte &&
      votos.quixada > votos.mombaca
    ) {
      return "Quixadá ganhou!";
    } else if (
      votos.quixada === votos.mombaca &&
      votos.quixada !== votos.juazeiroDoNorte
    ) {
      return "As cidades Quixadá e Mombaça estão empatadas";
    } else if (
      votos.quixada === votos.juazeiroDoNorte &&
      votos.quixada !== votos.mombaca
    ) {
      return "As cidades Quixadá e Juazeiro do Norte estão empatadas";
    } else if (
      votos.mombaca === votos.juazeiroDoNorte &&
      votos.mombaca !== votos.quixada
    ) {
      return "As cidades Mombaça e Juazeiro do Norte estão empatadas";
    } else if (
      votos.mombaca === votos.juazeiroDoNorte &&
      votos.quixada === votos.juazeiroDoNorte &&
      votos.quixada === votos.mombaca
    ) {
      return "As cidades estão empatadas";
    }
  };

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

        <br />
        <br />
        <hr />

        <button onClick={() => alert(cidadeMaiorVotacao())}>
          Quem ganhou?
        </button>
      </div>
    </>
  );
};

export default VotaCidade;
