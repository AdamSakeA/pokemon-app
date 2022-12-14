import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DetailPokemon from './pages/DetailPokemon';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:pokemonId' element={<DetailPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
