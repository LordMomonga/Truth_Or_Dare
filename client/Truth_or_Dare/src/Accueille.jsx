import React from 'react'
import { logo } from './assets/image/indexPhoto';
import { fume } from './assets/image/indexPhoto';
import { fum } from './assets/image/indexPhoto';
import { Link } from 'react-router-dom';
import { personne } from './assets/image/indexPhoto';
const Accueille = () => {
  return (
    <div className='' >
        <div className='absolute bottom-[15%] md:left-[49%] left-[45%] font-bold text-[9px]'>Over-Dev</div>
    <img src={fume} alt="" className='h-[100px] absolute' />
    <img src={fume} alt="" className='h-[100px] absolute' />
    <img src={fume} alt="" className='h-[100px] absolute' />
    <img src={fum} alt="" className='h-[100px] absolute' />
    <img src={fum} alt="" className='h-[100px] absolute' />
    <img src={fum} alt="" className='h-[100px] absolute' />
    <img src={fum} alt="" className='h-[100px] absolute' />
    <img src={fume} alt="" className='h-[100px] absolute  right-[1%]' />
    <img src={fume} alt="" className='h-[100px] absolute  right-[1%]' />
    <img src={fume} alt="" className='h-[100px] absolute  right-[1%]' />
    <img src={fum} alt="" className='h-[100px] absolute  right-[1%]' />
    <img src={fum} alt="" className='h-[100px] absolute  right-[1%]' />
    <img src={fum} alt="" className='h-[100px] absolute  right-[1%]' />
    <img src={fum} alt="" className='h-[100px] absolute  right-[1%]' />
    <img src={fum} alt="" className='h-[100px] absolute  right-[1%]' />
    <div>
   
    </div>  <img src={logo} alt="h-[00px]" className=' absolute h-[100px] md:h-[200px] left-[36%] top-[20%] md:left-[740px] md:top-[250px]'/>
    <h1 className=' text-4xl font-bold md:text-8xl text-red-500 text-center w-screen mb-5 '>TRUTH_<span>O</span>R_DARE</h1>
    <div className='flex justify-center mt-10 py-10'><Link to="/Login" className='bg-blue-500 p-3 w-[100px] font-bold border-white border-2 text-center rounded-[10px]'>Enter</Link></div>
    
   </div>
  )
}

export default Accueille
