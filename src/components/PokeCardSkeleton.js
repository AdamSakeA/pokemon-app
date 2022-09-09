import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PokeCardSkeleton = ({ cards }) => {
  return (
    Array(cards).fill(0).map((_, i) => (
    <div key={i} className='pokelist'>
        <Skeleton className='image-pokemon' circle width={200} height={200} /> 
        <Skeleton width={200} height={30} className="title-pokemonname"/>   
        <div className='skills-pokelist'>
            <Skeleton width={90} height={30} className="skills-pokelist" />
            <Skeleton width={90} height={30} className="skills-pokelist" />
        </div>
    </div>
    ))

  )
}

export default PokeCardSkeleton