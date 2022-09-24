import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EffectDetailPokemon({ types }) {
  const [effectPokemon, setEffectPokemon] = useState([]);

  useEffect(() => {
    const getLinkEffect = async(name) => {
      await axios.get(`https://pokeapi.co/api/v2/type/${name}/`)
      .then((response) => {
        setEffectPokemon(item => [...item, {
          effectName : name.charAt(0).toUpperCase() + name.slice(1),
          effectDamage : {
            doubleDamageFrom : response.data.damage_relations.double_damage_from,
            doubleDamageTo : response.data.damage_relations.double_damage_to,
            halfDamageFrom : response.data.damage_relations.half_damage_from,
            halfDamageTo : response.data.damage_relations.half_damage_to
          }            
        }])
      })
      .catch((error) => {
        if(error.response) {
          console.log(error.response.data)
        }
      })
    }

    const getTypesName = () => {
      types.map(item => { return getLinkEffect(item.type.name) }
    )}

    getTypesName()
  }, [types])

  return (
    <div className='effect-container'>
        <h1 className='sub-title'>EFFECT SKILL</h1>
        <div className='effect-contents'>
        {effectPokemon.map((item, i) => {
          return (
            <div key={i} className='effect-content'>
              <h2 className={`sub-title effect-titles ${item.effectName.toLowerCase()}`}>{item.effectName}</h2>
              <div className='group-contents'>
                <h2>Double Damage From</h2>
                <div key={i} className='list-group-contents'>
                {item.effectDamage.doubleDamageFrom.map((item, i) => {
                  return (
                      <h3 key={i} className={`list-effect ${item.name}`} >{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                      )
                    })}
                </div>
              </div>
              <div className='group-contents'>
                <h2>Double Damage To</h2>
                <div className='list-group-contents'>
                {item.effectDamage.doubleDamageTo.map((item, i) => {
                  return (
                      <h3 key={i} className={`list-effect ${item.name}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                      )
                    })}
                </div>
              </div>
              <div className='group-contents'>
                <h2>Half Damage From</h2>
                <div className='list-group-contents'>
                {item.effectDamage.halfDamageFrom.map((item, i) => {
                  return (
                      <h3 key={i} className={`list-effect ${item.name}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                      )
                    })}
                </div>
              </div>
              <div className='group-contents'>
                <h2>Half Damage To</h2>
                <div className='list-group-contents'>
                {item.effectDamage.halfDamageTo.map((item, i) => {
                  return (
                      <h3 key={i} className={`list-effect ${item.name}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                      )
                    })}
                  </div>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}
