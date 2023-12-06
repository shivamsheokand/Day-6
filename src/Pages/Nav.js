import React from 'react'
import Logo from '../assets/logo.png'
const Nav = () => {
    return (
        <nav className='flex items-center gap-8'>
        <div className='bg-[#495e41] w-20 h-20 flex items-center justify-center'>
            <img className='w-14 resize ' src={Logo} alt="" />
        </div>
            <ul className='flex items-center uppercase gap-8 text-[#495e41]'>
                <li>making</li>
                <li>costumer</li>
                <li>gallery</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default Nav