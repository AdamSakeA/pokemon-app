import axios from 'axios'
import { useState, useEffect } from 'react';
import '../../styles/DetailPokemon.scss'

export default function AbiityDetailPokemon({ ability }) {
  const [dataAbility, setDataAbility] = useState([]);

  useEffect(() => {
    const getLinkAbility = async(name) => {
      await axios.get(`https://pokeapi.co/api/v2/ability/${name}/`)
      .then((response) => {
        let effect = "";
        response.data.effect_entries.forEach(item => {
          return item.language.name === "en" ? effect = item.effect : null;
        })
        setDataAbility(item => [...item, {
          abilityName : name.charAt(0).toUpperCase() + name.slice(1).split("-").join(" "),
          effectAbility : effect
        }])
      })
      .catch((error) => {
        if(error.response) {
          console.log(error.response.data)
        }
      })
    }
    
    const getNameAbility = () => { 
      ability.map(item => { return getLinkAbility(item)})
    }

    getNameAbility()
  }, [ability])

  return (
    <div className='ability-container'>
      <h1 className='sub-title'>ABILITY</h1>
      <hr></hr>
      <div className='ability-contents'>
        {dataAbility.map((item, i) => {
          return (
            <div key={i} className='ability-content'>
              <h1 className='ability-title-skill'>{item.abilityName}</h1>
              <p className='ability-desc-skill'>{item.effectAbility}</p>
            </div>          
          )
          })}    
      </div>
    </div>
  )
}
