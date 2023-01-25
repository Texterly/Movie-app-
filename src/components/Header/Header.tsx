import React from 'react';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';

function Header() {
  return (
    <header className='mb-20'>
        <nav className='border-b border-gray-200 border-opacity-25 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <a href="#!" className='flex items-center'>
                    <span className='self-center text-xl font-semibold whitespace-nowrap'>
                        Movies
                    </span>
                </a>
                <div className='flex items-center lg:order-2'>
                    <BsSun className='hover:opacity-50 cursor-pointer' />
                    <BsFillMoonFill className='hover:opacity-50 cursor-pointer' />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header