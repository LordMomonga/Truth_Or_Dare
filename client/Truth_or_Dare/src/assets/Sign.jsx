import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { logo } from './image/indexPhoto'
import { fum } from './image/indexPhoto'
import { fume } from './image/indexPhoto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'
const Sign = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading, activ} = useSignup()
   
   
   

   

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(pseudo, email, password);
        
       await signup(pseudo, email, password);
      
       setEmail('')
       setPassword('')
       setPseudo('')

    }
    
  return (
    <div>
        <h1 className='text-center text-[10px] mb-[20px] font-bold text-gray-500'>TRUTH_OR_DARE</h1>
    <div>
     <Link to="/"> <img src={logo} alt="" className='h-[190px] absolute md:left-[42%] left-[20%] top-[7%]'/></Link>  
     <div className=' py-[120px] shadow-xl shadow-red-500'>
     <h1 className=' text-4xl md:text-5xl text-red-500 w-screen text-center mb-5'>Inscrivez vous </h1>
<form action="" className='flex flex-col gap-5 items-center ' onSubmit={handleSubmit}>
    <input type="text" name="pseudo" 
    value={pseudo}
    required
    onChange={(e) => setPseudo(e.target.value)}
     placeholder='entrez votre pseudo' 
     className='rounded-md p-2 md:w-1/4 text-center mt-5 w-1/2'/>
    
    <input type="email" 
    name="email" 
    value={email}
    required
    onChange={(e) => setEmail(e.target.value)}
     placeholder='entrez votre email' className='rounded-md p-2 md:w-1/4 text-center mt-5 w-1/2'/>
    <input type="password" name="password" 
    value={password}
    required
    onChange={(e) => setPassword(e.target.value)} 
     placeholder='entrez votre mot de passe' className='rounded-md p-2 md:w-1/4 text-center w-1/2 mt-5'/>
    {error && <div className=' absolute top-[1%] p-2 bg-red-400 border-red-600  border-4 rounded w-1/2 text-center'>{error}</div>}
    {activ && <div className='p-3 bg-green-300 text-gray-800 border-4 border-green-500 rounded w-1/2 text-center'>vous avez bien été enregistré</div>}

    <button disabled={isLoading} type="submit" className=' shadow-xl shadow-black px-10 py-2 mt-5'>Sign Up</button>
        <Link to="/"><img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%]' /></Link>
        <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%]' /></Link>
        <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%]' /></Link>
        <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%]' /></Link>
        <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%]' /></Link>
        <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%]' /></Link>
        <Link to="/"> <img src={fum} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%]' /></Link>
        <Link to="/"> <img src={fume} alt="" className='h-[200px] absolute md:left-[45%] left-[30%] top-[3%] ' /></Link>
    <span className='text-[12px] mt-5 md:mt-2'>j'ai deja un <Link to="/Login" className='text-blue-500'>compte</Link></span>
    
</form>
     </div>
   

    </div>

</div>
  )
}

export default Sign
