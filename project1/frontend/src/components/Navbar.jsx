import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full'>
        <ul className='flex w-auto items-center justify-center gap-3 text-xl py-4 '>
            <li>Student Table</li>
            <li>Courses Table</li>
        </ul>
    </nav>
  )
}

export default Navbar