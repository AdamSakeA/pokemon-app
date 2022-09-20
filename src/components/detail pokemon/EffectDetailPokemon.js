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
    <div className='ability-container'>
        <h1 className='sub-title'>EFFECT</h1>
        <div className='ability-contents'>
        {effectPokemon.map((item, i) => {
          return (
            <div key={i} className='ability-content'>
              <h2>{item.effectName}</h2>
              <div className='group-contents'>
                <h2>Double Damage From</h2>
                {item.effectDamage.doubleDamageFrom.map((item, i) => {
                  return (
                    <div key={i} className='list-group-contents'>
                      <p >{item.name}</p>
                    </div>
                  )
                })}
              </div>
              <div className='group-contents'>
                <h2>Double Damage To</h2>
                {item.effectDamage.doubleDamageTo.map((item, i) => {
                  return (
                    <div key={i} className='list-group-contents'>
                      <p>{item.name}</p>
                    </div>
                  )
                })}
              </div>
              <div className='group-contents'>
                <h2>Half Damage From</h2>
                {item.effectDamage.halfDamageFrom.map((item, i) => {
                  return (
                    <div key={i} className='list-group-contents'>
                      <p>{item.name}</p>
                    </div>
                  )
                })}
              </div>
              <div className='group-contents'>
                <h2>Half Damage To</h2>
                {item.effectDamage.halfDamageTo.map((item, i) => {
                  return (
                    <div key={i} className='list-group-contents'>
                      <p>{item.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}
