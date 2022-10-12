import { useEffect, useState } from "react"

import api from "../services/api"

const Questao04 = () => {
  var populacoes = []
  const [paises, setPaises] = useState()
  
  useEffect(() => {
    api.get(`https://restcountries.com/v2/region/africa?fields=name,population`)
    .then((res) => setPaises(res.data))
    .catch((err) => {
      console.error(err)
    })
  }, [])
  
  
  return (
    <div>
      <h1>Questão 4</h1>
      <b>Maior População: {Math.max(...populacoes)} </b>
      {paises !== undefined && paises?.map(item => {
        populacoes.push(item.population)
        return <p key={item.name}>{item.name}</p>
      })}
    </div>
  )
}

export default Questao04
