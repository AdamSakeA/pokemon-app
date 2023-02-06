import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.scss'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import imageBg from '../assets/img/pokeball-bg.jpeg'

export default function Home() {
  const navigate = useNavigate()

  // go to pokedex page
  const setLink = () => {
    navigate("/pokedex")
  }

  return (
    <div className='Home container'>
      <Navbar />
      <img className='background-mobile' src={imageBg} alt='pokeimg' />
        <div className='home-content'>
            <h1 className='title-home'>Wanna Know Any Pokemon?</h1>
            <p className='desc-home'>We share about pokemon monsters by skills in pokedex, if you want to know pokemon detail just click the card</p>
        </div>
        <button onClick={() => setLink()} className='pokedex-btn'>Go to Pokedex</button>
      <Footer />
    </div>
  )
}