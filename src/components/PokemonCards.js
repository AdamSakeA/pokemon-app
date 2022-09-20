import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';

export default function PokemonCards(props) {
    const navigate = useNavigate();

    const handleDetailPokemon = (name) => {
        navigate(`/pokedex/${name}`)
    }

  return (
    <div onClick={() => handleDetailPokemon(props.name)} className='pokelist'>
        <img className='image-pokemon' src={props.img || <Skeleton />} alt="poke-img" />
        <h2 className='title-pokemonname'>{props.pokemonName || <Skeleton />}</h2>
        <div className='skills-pokelist'>
        {props.skill.map((item, i) => {
            const pokemonSkill = item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
            return <button key={i} className={`pokeskill-item ${item.type.name}`}>{pokemonSkill}</button>
        })
        }
        </div>
    </div>
  )
}
