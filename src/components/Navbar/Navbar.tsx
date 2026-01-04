import React from 'react'

const Navbar = ({children}: {children: React.ReactNode}) => {
  return (
    <nav className='w-full z-20 top-0 start-0 border-b border-default text-xl'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href="#" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src="placeholder.svg" alt="" />
            <span className='self-center font-semibold'>ProductName</span>
          </a>
          {children}
        </div>
    </nav>
  )
}

export default Navbar