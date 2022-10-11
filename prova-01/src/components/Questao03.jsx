import { useEffect, useState } from "react"

import api from "../services/api"

const Questao03 = () => {
  const [offset, setOffset] = useState(10)
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    api.get(`pokemon?limit=10&offset=${offset}`)
      .then((res) => setPokemons(res.data))
      .catch((err) => {
        console.error(err)
      })
  }, [offset])
  
  return (
    <div>
      <h1>Questão 3</h1>
      {pokemons?.results?.map(item => {
        return <p key={item.name}>{item.name}</p>
      })}
      <br/>
      <button onClick={() => setOffset(offset+10)}>Proximo 10</button>
    </div>
  )
}

export default Questao03
