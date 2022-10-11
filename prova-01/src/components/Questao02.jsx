import { useState } from "react"

const Questao02 = () => {
  const [resultado, setResultado] = useState(0)
  const [valores, setValores] = useState({ n1: 0, n2: 0 })
  
  function soma() {
    setResultado(Number(valores.n1) + Number(valores.n2))
  }

  function div() {
    setResultado(Number(valores.n1) / Number(valores.n2))
  }

  function sub() {
    setResultado(Number(valores.n1) - Number(valores.n2))
  }

  function mult() {
    setResultado(Number(valores.n1) * Number(valores.n2))
  }
  
  return (
    <div>
      <h1>Questao02</h1>
      <div className="d-flex">
        <input 
          onChange={(e) => setValores({
            ...valores,
            n1: e.target.value
          })}
          value={valores.n1}
          className="form-control m-2" 
          placeholder="Numero 1" 
          type="number" />
        <input
          onChange={(e) => setValores({
            ...valores,
            n2: e.target.value
          })}
          value={valores.n2}
          className="form-control m-2" 
          placeholder="Numero 2"
          type="number" />
      </div>
      <br/>
      <br/>
      <button onClick={() => soma()} className="btn btn-primary mx-1">+</button>
      <button onClick={() => sub()} className="btn btn-warning mx-1">-</button>
      <button onClick={() => mult()} className="btn btn-info mx-1">*</button>
      <button onClick={() => div()} className="btn btn-dark mx-1">/</button>
      <br/>
      <br/>
      <p>Resultado: {resultado}</p>
    </div>
  )
}

export default Questao02
