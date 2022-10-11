import "bootstrap/dist/css/bootstrap.min.css";

const Questao01B = () => {
  let disciplinas = [
    "Engenharia de Software",
    "Interface Humano Computador",
    "Sistema Operacional",
    "Desenvolvimento Web",
    "Estatistica e probabilidade",
  ]

  return (
    <div>
      <h1 className="title">Questao01B</h1>
      <div className="mt-3">
        {disciplinas.map(item => {
          return <p key={item}>{item}</p>
        })}
      </div>
    </div>
  )
}

export default Questao01B
