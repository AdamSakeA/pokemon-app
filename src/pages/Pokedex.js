import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ImSearch } from 'react-icons/im'
import { RiCloseCircleFill } from 'react-icons/ri'
import '../styles/Pokedex.scss'
import ShowPokemon from '../components/ShowPokedex'

export default function Pokedex() {
  const [pokedex, setPokedex] = useState("");
  const [prevPokedex, setPrevPokedex] = useState("");
  const [pokemonSkills, setPokemonSkills] = useState([]);
  const [pokemonSkillName, setPokemonSkillName] = useState([]);
  const [pokeFilter, setPokeFilter] = useState(false)
  const [isActive, setIsActive] = useState("")
  const pokemonName = useRef()

  useEffect(() => {
    getPokeSkill()
    inputPokemonName()
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

  const getSkillName = useCallback(async(skillName) => {
    setPokeFilter(true)
    setIsActive(skillName)
    await axios.get(`https://pokeapi.co/api/v2/type/${skillName}`)
    .then((response) => {
      setPokemonSkillName([])
      setPrevPokedex("")
      if (pokemonSkillName !== null) {
        return response.data.pokemon.forEach(item => setPokemonSkillName(currentData => [...currentData, item.pokemon.name]))
      } 
    })
    .catch(error => {
      if(error.response) {
        console.log(error.response.data);
      }
    })
  }, [pokemonSkillName])

  const inputPokemonName = () => {
    pokemonName.current.focus()
  }

  const handleSearch = (name) => {
    setPokeFilter(true)
    setPokedex(name)
  }

  const handleResetPokemonSkill = useCallback(() => {
    setPokemonSkillName([])
    setPrevPokedex("")
    setPokedex("")
    setPokeFilter(false)
    setIsActive("")
  }, [])

  const handleResetPokemonName = useCallback(() => {
    setPokemonSkillName([])
    setPrevPokedex("")
    setPokedex("")
    setPokeFilter(false)
    setIsActive("")
  }, [])

  return (
    <div className='pokedex-page'>
      <Navbar />
      <div className='pokedex section'>
        <div className='pokedex-contents container'>
          <h1 className='title-pokedex'>Search your pokemon!</h1>
          <div className='pokedex-input' >
            <ImSearch type='submit' className='icon-search' onClick={() => handleSearch(prevPokedex)}/>
            <input className='pokedex-search' type="text" placeholder='Search' ref={pokemonName} value={prevPokedex} onChange={(e) => setPrevPokedex(e.target.value)} />
            {prevPokedex === "" ? null : <RiCloseCircleFill onClick={() => handleResetPokemonName()} className='icon-search'/> }
            <input type='submit' className='' disabled={prevPokedex === "" ? true : false} onClick={() => handleSearch(prevPokedex)} value={'Search'} />
          </div>
          <div className='pokedex-input-skills'>
            {pokemonSkills.map((item, i) => {
              const pokemonSkills = item.name.charAt(0).toUpperCase() + item.name.slice(1)
              return (
                <button className={`skill-btn ${isActive === item.name ? "active" : ""}`} onClick={() => getSkillName(item.name)} key={i}>{pokemonSkills}</button>
              )
            })}
          </div>
          <button onClick={() => handleResetPokemonSkill()}>Reset</button>
        </div>
        <ShowPokemon pokedex={pokedex} pokemonSkillName={pokemonSkillName} pokeFilter={pokeFilter} />
      </div>
      <Footer />
    </div>
  )
}