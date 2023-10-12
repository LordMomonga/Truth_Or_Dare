import React from 'react'
import { useLogout } from '../../hooks/useLogout'
import { mess } from '../image/indexPhoto'
import { personne } from '../image/indexPhoto'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import { notification } from '../image/indexPhoto'
import { menu } from '../image/indexPhoto'
import { lock } from '../image/indexPhoto'
import { home } from '../image/indexPhoto'
import { icon } from '../image/indexPhoto'
import { useState } from 'react'

import Ami from '../../ami'

const Navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const [isOpen, setIsOpen] = useState(false)
    const [click, SetClick] = useState(false)

    const handleClick = () => {
        logout()

    }
    
   

  return (
    <div>
          <div className='fixed top-0 w-screen  p-4 '>
        <div className='flex items-center justify-between '>
        <div className='font-bold text-[15px] md:text-2xl'>I am <span className='text-red-600 text-3xl' > {user.pseudo}</span></div>
       <Link to="/accueille"> <h1 className='text-gray-500 text-[10px] md:text-[20px] '>Truth_or_Dare</h1></Link>
        <div className=' hidden md:flex gap-5 items-center '>
        <img src={notification} alt="" className='h-[30px]' />
        <img src={mess} alt="" className='h-[30px] ' />
        
        <button className=" border-3 border-red-500 px-4 py-2 shadow-xl shadow-red-500" onClick = {handleClick}>Logout</button>

        </div>
        <div className=' md:hidden '> 
        <img src={!isOpen ? menu : lock} alt="" className='h-[18px] ' onClick={() => setIsOpen(!isOpen)}/>
            
        </div>
        <div className={` ${isOpen ? ' absolute right-[2px] top-[95%] px-10 py-2 bg-white rounded text-black font-semibold text-[14px] w-full md:hidden gap-2' : 'hidden'} `}>
            <ul>
          <Link to="/accueille"> <li className='p-4 hover:bg-gray-100 rounded flex items-center gap-5 '><img src={home} alt="" className='h-[18px]'/> Home</li></Link> 
            <li className='p-4 hover:bg-gray-100 rounded flex items-center gap-5 '><img src={notification} alt="" className='h-[18px]'/> Notification</li>
               <li className='p-4 hover:bg-gray-100 rounded flex items-center gap-5 '><img src={personne} alt=""  className='h-[25px] rounded-full'/>Personnes</li>
            <li className='p-4 hover:bg-gray-100 rounded flex items-center gap-5 '><img src={icon} alt=""  className='h-[25px] rounded-full'/> My Profil</li>
            

             <li className='p-4 hover:bg-gray-100 rounded text-center bg-gray-400 shadow-xl shadow-red-400 mt-2' onClick = {handleClick}>Logout</li>
            <div className='flex flex-col my-4 gap-4'>
          

            </div>
           
            </ul>
         </div>
       
        

        </div>
       
      </div>
      

      
    </div>
  )
}

export default Navbar
