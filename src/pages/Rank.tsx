import React from 'react'
import Header from '../components/Header'
import People from '../components/People'
import Welcome from '../components/Welcome'
import { people } from '../constants'

const Rank = () => {

  people.sort((a, b) => a.score - b.score).reverse()

  return (
    <div className='w-full h-[100vh] flex flex-col justify-start items-center'>
      <Header />
      <Welcome />
      <div className='z-10 w-full h-full bg-[#1a124981] flex flex-col items-center justify-center '>
        <div className='w-full max-w-[1000px] h-[800px] grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#262568a6] p-4 rounded box__shadow text-white my-[30px] overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-cyan-700 scrollbar-thumb-cyan-900'>
          {people?.map(person => <People key={person.name} person={person}/>)}
        </div>
      </div>
    </div>
  )
}

export default Rank