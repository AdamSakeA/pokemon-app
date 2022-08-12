import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ImSearch } from 'react-icons/im'
import '../styles/Pokedex.scss'
import ShowPokemon from '../components/ShowPokedex'

export default function Pokedex() {
  const [pokedex, setPokedex] = useState("");
  const [pokemonSkills, setPokemonSkills] = useState([]);
  const [pokemonSkillName, setPokemonSkillName] = useState([]);

  useEffect(() => {
    getPokeSkill()
  }, [])

  const getPokeSkill = async() => {
    await axios.get('https://pokeapi.co/api/v2/type')
    .then((response) => {
      setPokemonSkills(response.data.results)
    })
    .catch((error) => {
        if(error) {
            console.log(error.response.data)
        }
    })
  }

  const getSkillName = async(skillName) => {
    await axios.get(`https://pokeapi.co/api/v2/type/${skillName}`)
    .then((response) => {
      setPokemonSkillName([])
      if (pokemonSkillName !== null) {
        return response.data.pokemon.forEach(item => setPokemonSkillName(currentData => [...currentData, item.pokemon.name]))
      } 
    })
    .catch((error) => {
      if(error.response) {
          console.log(error.response.data)
      }
    })
  }

  const handleReset = () => {
    setPokemonSkillName([])
    setPokedex("")
  }

  return (
    <div className='pokedex-page'>
      <Navbar />
      <div className='pokedex section'>
        <div className='pokedex-contents container'>
          <h1 className='title-pokedex'>Search your pokemon!</h1>
          <div className='pokedex-input' >
            <input className='pokedex-search' type="text" placeholder='Search' value={pokedex} onChange={(e) => setPokedex(e.target.value)} />
            <ImSearch type='submit' className='icon-search'/>
          </div>
          <div className='pokedex-input-skills'>
            {pokemonSkills.map((item, i) => {
              const pokemonSkills = item.name.charAt(0).toUpperCase() + item.name.slice(1)
              return (
                <button className={`skill-btn`} onClick={() => getSkillName(item.name)} key={i}>{pokemonSkills}</button>
              )
            })}
          </div>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
        <ShowPokemon pokedex={pokedex} pokemonSkillName={pokemonSkillName} />
      </div>
      <Footer />
    </div>
  )
}