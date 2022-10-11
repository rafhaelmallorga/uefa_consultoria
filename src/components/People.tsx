import React from 'react'

interface PersonProps {
    person: {
        name: string,
        role: string,
        like: string,
        abilities: string,
        image: string,
        score: number,
        money: number
    }
}

const People = ({person}:PersonProps) => {
  return (
    <div className='bg-[#5acfdf7c] w-full flex p-4 h-[280px] box__shadow hover:cursor-pointer hover:brightness-110 rounded'>
        <div className='w-[30%] md:w-[40%]'>
            <img src={person.image} alt={`${person.name} profile picture`} className="rounded-full w-[80px] h-[80px] md:w-[150px] md:h-[150px] border-2 border-red-600 box__shadow" />
        </div>
        <div className='w-[70%] md:w-[60%] h-full flex flex-col justify-between'>
            <div>
                <h3 className='text-[30px] font-bold text-red-700 text__shadow leading-8'>{person.name}</h3>
                <span className='text-[14px] font-bold text-[#c5c5c5] text__shadow'>{person.role}</span>
            </div>
            <div className='flex-1'>
                <p className='mt-1 text-[14px]'><span className='font-bold'>Habilidades: </span> {person.abilities}</p>
                <p className='mt-1 text-[14px]'><span className='font-bold'>Adoro: </span>{person.like}</p>
            </div>
            <div className='w-full flex justify-between '>
                <span className='text-[14px] md:text-[16px] font-bold text__shadow'>Pontos: <span className='text-[#04d855]'>{person.score}</span></span>
                <span className='text-[14px] md:text-[16px] font-bold text__shadow'>Prêmio: <span className='text-[#04d855]'>R$ {person.money.toFixed(2)}</span></span>
            </div>
        </div>
    </div>
  )
}

export default People