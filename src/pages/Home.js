import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.scss'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
  const navigate = useNavigate()

  // go to pokedex page
  const setLink = () => {
    navigate("/pokedex")
  }

  return (
    <div className='Home'>
      <Navbar />
      <div className='home-contents section'>
        <div className='home-content container'>
            <h1>Wanna Know Any Pokemon?</h1>
            <p>We share about pokemon monsters by skills in pokedex, if you want to know pokemon detail just click the card</p>
            <button onClick={() => setLink()} className='pokedex-btn'>Go to Pokedex</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}