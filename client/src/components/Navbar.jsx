import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {CustomButton} from './'
import {logo, menu, search, thirdweb} from '../assets/assets'
import { navlinks } from '../constants'

//Navbar will used to traverse the application

const Navbar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState('dashboard')
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 '>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
      <input type='text' placeholder='Search for campaigns' className='flex w-full font-epiloque font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none'/>
        <div className=' w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer '>
        <img src={search} alt="search" className='w-[15px] h-[15px] object-contain'/>

        </div>
      </div>
    </div>
  )
}

export default Navbar
