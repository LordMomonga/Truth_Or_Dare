import React from 'react'
import { useLogout } from './hooks/useLogout'
import { useAuthContext } from './hooks/useAuthContext'
import { notification } from './assets/image/indexPhoto'
import { menu } from './assets/image/indexPhoto'
import { mess } from './assets/image/indexPhoto'
import { lock } from './assets/image/indexPhoto'
import { personne } from './assets/image/indexPhoto'
import { icon } from './assets/image/indexPhoto'
import { home } from './assets/image/indexPhoto'
import { Link } from 'react-router-dom'
import { lien } from './assets/image/indexPhoto'
import { id, groupe } from './assets/image/indexPhoto'
import { useState } from 'react'
import { logo } from './assets/image/indexPhoto'
import Navbar from './assets/components/Navbar'


const Ami = () => {
   
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const [isOpen, setIsOpen] = useState(false)
  const [click, SetClick] = useState(false)
  const [amisAdd, setAmiAdd] = useState(false)
  const [groupeAdd, setGroupeAdd] = useState(false)

  const handleClick = () => {
      logout()

  }
  return (
    <>
    <div className={`${amisAdd ? 'hidden': ''} ${groupeAdd ? 'hidden': ''}`}>
      
    <div className={`  fixed top-0 w-screen  p-4 `}>
      <div className='flex items-center justify-between '>
      <div className='font-bold text-[15px] md:text-2xl'>I am <span className='text-red-600 text-2xl' > {user.pseudo}</span></div>
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
       <Link to="/accueille">   <li className='p-4 hover:bg-gray-100 rounded flex items-center gap-5 '><img src={home} alt="" className='h-[18px]'/> Home</li></Link>
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
      <div className={` ${click ? '': ' border-b-2 border-blue-500  text-black font-bold'} w-full  h-full items-center flex justify-center`} onClick={() => SetClick(!click)}>AMIS</div>
      <div className={` ${click ? 'border-b-2 border-blue-500 text-black font-bold': ''} w-full  h-full items-center flex justify-center`} onClick={() => SetClick(!click)} >GROUPES</div>
    </div>
    {!click && (
      <div className={`${isOpen ? 'hidden': ''} flex flex-col fixed top-[14%] w-full border-b-gray-500 pb-1`}>
         <div className='text-[14px] border-b-[1px] border-gray-400 pb-3 mt-3 text-gray-400 font-bold flex items-center '  onClick={ (e) => setAmiAdd(true)}> <img src={id} alt="" className='flex h-[40px] ' />Ajouter un ami avec un ID</div>
         <div className='text-[14px] border-b-[1px] border-gray-400 pb-3 mt-3 text-gray-400 font-bold flex items-center '> <img src={lien} alt=""  className='flex h-[40px] '/>Partager le lien Ami</div>
          


      </div>
    )}
     {click && (
      <div className='relative '>
          <div className='fixed top-[14%] w-full'>
            <div className='text-[14px] border-b-[1px] border-b-gray-500 pb-3 mt-3  text-gray-400 font-bold flex items-center' onClick={(e) => setGroupeAdd(true)}>
             <img src={groupe} alt="" className='flex h-[40px] '/> Créez un groupe 
            </div>
            </div>
            <div className='w-screen text-center text-blue-500 font-bold'>En cours de developpement ...</div>

      </div>
    
    )}
   
    
  </div>
  
  {amisAdd &&(
      <div className='relative w-screen '>
       <div className=' fixed top-[1%] boder-b-gray-600 border-b-[1px] w-screen pb-2'>
        <h1 className='flex items-center gap-5 text-gray-300 text-[14px] '> <span className='text-4xl ml-3 text-white' onClick={(e) => setAmiAdd(false)}> &lt; </span> <span className='mt-1'> Ajouter un ami avec un ID</span> </h1>
       </div>
       <div className=' text-[12px] text-gray-400 fixed top-[12%] w-screen text-center'>

      <h1 className='mt-4 '>Veuillez entrer l'identifiant Truth_or_Dare de votre ami :  </h1>  
        <input type="text" className='mt-5 border-b-[1px] p-2 ' />
       </div>
      </div>
    )}
    {groupeAdd &&(
      <div className='relative w-screen '>
       <div className=' fixed top-[1%] boder-b-gray-600 border-b-[1px] w-screen pb-2'>
        <h1 className='flex items-center gap-5 text-gray-300 text-[14px] '> <span className='text-4xl ml-3 text-white' onClick={(e) => setGroupeAdd(false)}> &lt; </span> <div className='flex   mt-1  '> <span className=''> Créez un groupe</span> <span className=' absolute right-[4%] text-[12px] text-gray-500'>CRÉEZ</span></div> </h1>
       </div>
       <div className=' text-[12px] text-gray-400 fixed top-[12%] w-screen '>
        <div className='flex w-screen px-1'>
          <div className='w-1/3 mr-4'>
           
            <img src={logo} alt="" className=' h-[110px] bg-black w-6/7 rounded-full ' />
          </div>
          <div className=' w-3/4 right-[2%] mr-2 gap-5 flex flex-col'>
            <div className='flex flex-col '>
              <label htmlFor="" className='font-bold text-[10px]'>Nom</label>
              <input type="text"  placeholder='insérez votre nom de groupe...' className='p-2 rounded-md '/>
            </div>
            <div className='flex flex-col '>
            <label htmlFor="" className='font-bold text-[10px]'>DESCRIPTION/MESSAGE</label>
              <textarea type="text" placeholder='Insérez la description de votre groupe...' className='p-2 rounded-md '/>
            </div>
          </div>
         
          


        </div>
        <div className=' mt-5 border-y-[1px] w-screen border-gray-500 p-2 text-[15px]'>Tous les membres peuvent inviter </div>
       <div className='mt-5 text-[10px] text-gray-500 ml-5 font-bold'>
        INVITER VOS AMIS ()
       </div>
       

      
       </div>
      
      </div>

    )}
    </>
  )
}

export default Ami
