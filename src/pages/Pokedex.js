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
    await axios.get(`https://pokeapi.co/api/v2/type/${skillName}`)
    .then((response) => {
      setPokemonSkillName([])
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
    if(prevPokedex !== "") {
      const currentName = name
      setPokedex(currentName)
    } else {
      setPokedex("")
    }
  }

  const handleResetPokemonSkill = () => {
    setPokemonSkillName([])
    setPrevPokedex("")
    setPokedex("")
  }

  const handleResetPokemonName = () => {
    setPrevPokedex("")
    setPokedex("")
  }

  return (
    <div className='pokedex-page'>
      <Navbar />
      <div className='pokedex section'>
        <div className='pokedex-contents container'>
          <h1 className='title-pokedex'>Search your pokemon!</h1>
          <div className='pokedex-input' >
            <input className='pokedex-search' type="text" placeholder='Search' ref={pokemonName} value={prevPokedex} onChange={(e) => setPrevPokedex(e.target.value)} />
            {prevPokedex === "" ? null : <RiCloseCircleFill onClick={() => handleResetPokemonName()} className='icon-search'/> }
            <ImSearch type='submit' className='icon-search' onClick={() => handleSearch(prevPokedex)}/>
          </div>
          <div className='pokedex-input-skills'>
            {pokemonSkills.map((item, i) => {
              const pokemonSkills = item.name.charAt(0).toUpperCase() + item.name.slice(1)
              return (
                <button className={`skill-btn`} onClick={() => getSkillName(item.name)} key={i}>{pokemonSkills}</button>
              )
            })}
          </div>
          <button onClick={() => handleResetPokemonSkill()}>Reset</button>
        </div>
        <ShowPokemon pokedex={pokedex} pokemonSkillName={pokemonSkillName} />
      </div>
      <Footer />
    </div>
  )
}