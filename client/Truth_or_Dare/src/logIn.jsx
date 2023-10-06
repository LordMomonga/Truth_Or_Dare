import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useLogin } from './hooks/useLogin'
import { Link } from 'react-router-dom'
import { logo } from './assets/image/indexPhoto'
import { fum } from './assets/image/indexPhoto'
import { fume } from './assets/image/indexPhoto'
const LogIn = () => {
    const [pseudo, setPseudo] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading, activ} = useLogin()
    const navigate = useNavigate();


    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(pseudo, password)
    }
   
  return (
    <div>
        <h1 className='text-center text-[10px] mb-[20px] font-bold text-gray-500'>TRUTH_OR_DARE</h1>
        <div>
         <Link to="/"> <img src={logo} alt="" className='h-[200px] absolute md:left-[42%] left-[20%] top-[10%]'/></Link>  
         <div className=' py-[130px] shadow-xl shadow-red-500'>
         <h1 className='text-4xl md:text-5xl  text-red-500 w-screen text-center  '> Connectez vous </h1>
    <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5 items-center py-[50px] border-none  '>
        <input type="text" 
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        placeholder='entrez votre pseudo' className='rounded-md p-2 md:w-1/4 text-center  mt-2 md:mt-3'/>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
         placeholder='entrez votre mot de passe' className='rounded-md p-2 md:w-1/4 text-center mt-5'/>
        <button  disabled={isLoading} type='submit' className=' shadow-xl shadow-black px-10 py-2 mt-5'>Sign In</button>
        {error && <div className=' absolute top-[1%] p-2 bg-red-400 border-red-600  border-4 rounded w-1/2 text-center'> {error} </div>}
        <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] md:left-[45%] top-[10%]' /></Link>
       <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] md:left-[45%] top-[10%]' /></Link>
      <Link to="/">  <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] md:left-[45%] top-[10%]' /></Link>
       <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] md:left-[45%] top-[10%]' /></Link>
       <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] md:left-[45%] top-[10%]' /></Link>
        <Link to="/"><img src={fume} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] md:left-[45%] top-[10%] ' /></Link>

        <span className='text-[12px]'>je n'ai pas de <Link to="/sign" className='text-blue-500'>compte</Link></span>
    </form>

         </div>

    
        </div>
   
    </div>
  )
}

export default LogIn
