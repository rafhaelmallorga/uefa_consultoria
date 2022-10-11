import React from 'react'
import { nubia_hi } from '../assets'
import Header from '../components/Header'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-start items-center overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-cyan-700 scrollbar-thumb-cyan-900'>
        <Header />
        <Welcome />
        <div className='z-10 w-full h-full bg-[#1a124981] flex flex-col items-center justify-center '>
            <div className='bg-[#262568a6] w-full mt-[60px] md:w-[900px] p-8 rounded-2xl box__shadow '>
                <h1 className='text-[45px] font-bold text-white mb-10 mt-60 md:mt-0 text-center text__shadow'>Champions League Consultoria</h1>
                <div className='flex text-white flex-col md:flex-row'>
                    <div className='w-full md:w-[500px] flex flex-col justify-center items-start'>
                        <h3 className='text-[40px] font-bold text-red-500 text__shadow'>Convocação!</h3>
                        <span className='font-bold my-6 text-[24px] text__shadow'>Peneira 2022</span>
                        <p className='mb-4'>Você foi convocado para a campanha dos <span className='text-red-500 font-bold'>Reds</span>!</p>
                        <p className='mb-4'>Os times Europeus estão a procura dos melhores jogadores do mundo.
                        Para ser escalado você precisa apresentar as qualificações / competências que eles buscam.
                        </p>
                        <p className='mb-4 font-bold'>
                        E aí, em qual você será selecionado, um, dois, ou todos? =)
                        </p>
                    </div>
                    <div className='w-full md:w-[300px] flex justify-center items-center'>
                        <img src={nubia_hi} alt="Nubia dizendo olá" className='h-[250px] rounded-full'/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home