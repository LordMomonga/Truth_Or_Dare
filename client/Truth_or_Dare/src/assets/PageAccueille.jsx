import React from 'react'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { notification } from './image/indexPhoto'
import { mess } from './image/indexPhoto'
import { menu } from './image/indexPhoto'
import { lock } from './image/indexPhoto'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { personne } from './image/indexPhoto'
import { icon } from './image/indexPhoto'
import { home } from './image/indexPhoto'


const PageAccueille = () => {
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
        <h1 className='text-gray-500 text-[10px] md:text-[20px] '>Truth_or_Dare</h1>
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
            <li className='p-4 hover:bg-gray-100 rounded flex items-center gap-5 '><img src={home} alt="" className='h-[18px]'/> Home</li>
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
      <div className={`${isOpen ? 'hidden' : 'fixed'} text-[13px] flex  w-screen justify-evenly border-t-gray-500 border-b-gray-500 border-b-[1px] border-t-[1px]  top-[9%] h-[35px] items-center `} >
        <div className={` ${click ? '': ' border-b-2 border-blue-500  text-black font-bold'} w-full  h-full items-center flex justify-center`} onClick={() => SetClick(!click)}>FLUX</div>
        <div className={` ${click ? 'border-b-2 border-blue-500 text-black font-bold': ''} w-full  h-full items-center flex justify-center`} onClick={() => SetClick(!click)} >ACTUALITÉS</div>
      </div>
      {!click && (
        <div className={`${isOpen ? 'hidden': ''} flex flex-col fixed top-[14%] border-b-[1px] w-full border-b-gray-500 pb-1`}>
            <h2 className='ml-5 text-[10px] text-gray-400'>EN LIGNE/FAVORIS</h2>
         <Link to='/personne'>  <div>
                <img src={personne} alt="" className='h-[35px] mt-2 rounded-full ml-5'/>
                <div className='bg-blue-500  rounded-full w-[14px] absolute  top-[46%] left-[10%] '>
                  <span className='font-bold text-[20px] '> +</span> 
                </div>
            </div></Link> 
            <h1 className='text-[10px] mt-2 text-gray-400 ml-3'>ajouter un ...</h1>
            


        </div>
      )}
       {click && (
        <div className='w-screen text-center text-blue-500 text-2xl font-bold'>En cours de developpement ...  </div>
      )}
      
    </div>

  )
}

export default PageAccueille
