import { useEffect, useState } from "react"

import api from "../services/api"

const Questao04 = () => {
  let populacoes = []
  const [paises, setPaises] = useState()
  const [continente, setContinente] = useState('africa')
  
  useEffect(() => {
    api.get(`https://restcountries.com/v2/region/${continente}?fields=name,population`)
    .then((res) => setPaises(res.data))
    .catch((err) => {
      console.error(err)
    })
  }, [continente])
  
  return (
    <div className="mb-4">
      <h1>Questão 4</h1>
      <b>Maior População: {continente === 'asia' ? Math.min(...populacoes) : Math.max(...populacoes)} </b>
      {paises !== undefined && paises?.map(item => {
        populacoes.push(Number(item.population))
        return <p key={item.name}>{item.name}</p>
      })}

      <button className="btn btn-primary mx-1" onClick={() => setContinente('americas')}>Americas</button>
      <button className="btn btn-primary mx-1" onClick={() => setContinente('asia')}>Asia</button>
      <button className="btn btn-primary mx-1" onClick={() => setContinente('africa')}>Africa</button>
    </div>
  )
}

export default Questao04
