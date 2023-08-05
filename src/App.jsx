import { useState, useEffect } from 'react'
import { Card } from "./componentes/card"
import './App.css'
import{buscarPokemons} from "./serviços/pokemonApi"

function App() {
  const [pokemons, setPokemons] = useState([]);

  const armazenarPokemons = async () => {
    const resposta = await buscarPokemons();

    setPokemons(resposta);
  };
  useEffect(() => {
    armazenarPokemons();
  }, []);

  return (
    <>
      <section className='section-settings'>{pokemons.length > 0 ? (
        pokemons.map((item, index) => {
          return <Card props={item} key={index} />;
        })
      ) : (
        <div className="lds-heart">
          <div></div>
        </div>
      )}</section>


    </>
  )
}

export default App
