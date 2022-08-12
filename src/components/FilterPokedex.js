import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FilterPokedex({ pokedex, pokemonSkillName, handleDetailPokemon }) {
    const [pokemonFiltered, setPokemonFiltered] = useState([]);

    useEffect(() => {
        const pokeSearch = async(name) => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(function (response){
                pokedex.length !== 0 ? setPokemonFiltered([response.data]) : setPokemonFiltered([])
            })
            .catch(function (error) {
                if(error) {
                    console.log(error.response)
                }
            }) 
        }

        pokeSearch(pokedex.toLowerCase())
    }, [pokedex])

    useEffect(() => {
        const pokeFilteredBySkills = async(nama) => {
            setPokemonFiltered([])
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${nama}`)
            .then(response => {
                pokemonSkillName.length !== 0 ? setPokemonFiltered(currentData => [...currentData, response.data]) : console.log("Data Not Found")
            })
            .catch(error => {
                if (error) {
                    console.log(error.response)
                }
            })
        }

        pokemonSkillName.forEach(item => pokeFilteredBySkills(item))
    }, [pokemonSkillName])

    return (
        <>
            {pokemonSkillName !== null && pokemonFiltered.map((item, i) => {
                const pokemonName = item.name.charAt(0).toUpperCase() + item.name.slice(1)
                return (
                <div onClick={() => handleDetailPokemon(item.name)} className='pokelist' key={i + 1}>
                    <img src={item.sprites.other.home.front_default} alt="poke-img" />
                    <h2>{pokemonName}</h2>
                    <div className='skills-pokelist'>
                    {item.types.map((item, i) => {
                        const pokemonSkill = item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
                        return <button key={i} className={`pokeskill-item ${item.type.name}`}>{pokemonSkill}</button>
                    })}
                    </div>
                </div>
                )
            })}
        </>
    )
}
