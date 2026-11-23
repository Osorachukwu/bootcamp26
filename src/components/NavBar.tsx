import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex justify-between px-20 py-10 items-center '>
      <p>Serenia</p>

      <ul className='flex gap-12 items-center'>
        <li> <Link to="" className='flex'>Properties <ChevronDown /> </Link> </li>
        <li> <Link to="">Amenities</Link></li>
        <li><Link to="" className='flex'>Gallery <ChevronDown /></Link> </li>
        <li> <Link to="">Blog</Link></li>
      </ul>

      <ul className='flex gap-12 items-center'>
        <li><Link to="">Contact Us</Link></li>
        <li className='bg-gray-300 px-6 py-2'><Link to="">Request Tour</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar