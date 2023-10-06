import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './assets/components/Navbar'


const Ami = () => {
   
    const [click, SetClick] = useState(false)
  return (
    <>
      <Navbar /> 
      <div className={`fixed text-[13px] flex  w-screen justify-evenly border-t-gray-500 border-b-gray-500 border-b-[1px] border-t-[1px]  top-[9%] h-[35px] items-center `} >
        <div className={` ${click ? '': ' border-b-2 border-blue-500   font-bold'} w-full  h-full items-center flex justify-center`} onClick={() => SetClick(!click)}>AMIS</div>
        <div className={` ${click ? 'border-b-2 border-blue-500  font-bold': ''} w-full  h-full items-center flex justify-center`} onClick={() => SetClick(!click)} >GROUPES</div>
      </div>
     
    </>
  )
}

export default Ami
