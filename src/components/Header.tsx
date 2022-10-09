import React from 'react'
import { Link } from 'react-router-dom'
import { uefa_logo, nube_logo } from '../assets'


const Header = () => {
  return (
    <div className='bg-slate-300 w-full h-[70px] flex justify-center items-center header__gradient'>
        <div className='w-full max-w-[1000px] flex justify-between items-center'>
            <div className='flex items-center justify-center logo__gradient'>
                <img src={uefa_logo} alt="uefa logo" className='h-[70px] pl-8 logo__gradient'/>
                <img src={nube_logo} alt="nube logo" className='h-[70px] pr-12 logo__gradient'/>
            </div>
            <nav className='w-[200px] flex justify-between items-center text-white font-bold'>
                <Link to={"/"} className="hover:brightness-75 ">Home</Link>
                <Link to={"/sobre"} className="hover:brightness-75">Sobre</Link>
                <Link to={"/rank"} className="hover:brightness-75">Rank</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header