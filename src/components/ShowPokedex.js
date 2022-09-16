import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../styles/Pokedex.scss';
import axios from "axios";
import FilterPokedex from './FilterPokedex';
import PokemonCards from './PokemonCards';
import PokeCardSkeleton from './PokeCardSkeleton';

export default function PokeLists({ pokedex, pokemonSkillName, pokeFilter }) {
    const [limit, setLimit] = useState(0);
    const [pokemonAll, setPokemonAll] = useState([]);
    const [pokemonListName, setListPokemonName] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokeList = async() => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=10`)
            .then((response) => {
                setLoading(false)
                response.data.results.forEach(item => setListPokemonName((n) => [...n, item.name]));
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            })
            .finally(() => {
                setLoading(true)
            })
        }

        getPokeList()
        // getPokeForm()
    }, [limit])

    const getPokeForm = async(name) => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                setPokemonAll(currentData => [...currentData, response.data]);
                setLimit(limit + 10)
                setListPokemonName([])

            })
            .catch((error) => {
                if (error) {
                    console.log(error.response.data);
                }
            });
    }

    const handleScroll = () => {
        pokemonListName.forEach((response) => {
            setTimeout(async() => {
                await getPokeForm(response)
                setLoading(false)
            }, 1000);
        })
    }

    const PokemonResult = () => {
        return (
            <InfiniteScroll 
                dataLength={pokemonAll.length} 
                next={handleScroll} 
                hasMore={true}
                loader={loading && <PokeCardSkeleton cards={4} />}
                style={{ display: 'flex'}}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                className="pokelist-contents"
                >
                {pokemonAll.map((item, i) => {
                    const pokemonName = item.name.charAt(0).toUpperCase() + item.name.slice(1)
                    return (
                        <PokemonCards 
                            name={item.name}
                            key={i + 1}
                            pokemonName={pokemonName}
                            img={item.sprites.other.home.front_default}
                            skill={item.types}
                        />
                    )
                })}
            </InfiniteScroll>
        )
    }

    console.log(pokedex)

    return (
        <div className='container'>
            {(pokemonSkillName.length === 0 && pokedex.length === 0 && !pokeFilter) && <PokemonResult />}
            {pokeFilter && <FilterPokedex pokedex={pokedex} pokemonSkillName={pokemonSkillName} />}
            {/* {loading && <PokeCardSkeleton cards={8}/>} */}
        </div>
    )
}


