import React from 'react'
import { Link } from 'react-router-dom'
import { uefa_logo, nube_logo } from '../assets'


const Header = () => {
  return (
    <div className='w-full h-[60px] flex justify-center items-center header__gradient z-20 box__shadow'>
        <div className='w-full max-w-[1000px] flex justify-between items-center'>
            <div className='flex items-center justify-center logo__gradient'>
                <img src={uefa_logo} alt="uefa logo" className='h-[40px] md:h-[60px] pl-8 logo__gradient'/>
                <img src={nube_logo} alt="nube logo" className='h-[40px] md:h-[60px] pr-12 logo__gradient'/>
            </div>
            <nav className='w-[200px] flex pr-4 justify-between items-center text-white font-bold'>
                <Link to={"/"} className="hover:brightness-75 text__shadow">Home</Link>
                <Link to={"/sobre"} className="hover:brightness-75 text__shadow">Sobre</Link>
                <Link to={"/rank"} className="hover:brightness-75 text__shadow">Rank</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header