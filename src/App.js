import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DetailPokemon from './pages/DetailPokemon';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import { useSelector } from 'react-redux';

function App() {
  const { pokedexName } = useSelector(state => state.pokemon);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:pokemonId' element={<DetailPokemon pokemonName={pokedexName}/>} />
      </Routes>
    </div>
  );
}

export default App;
