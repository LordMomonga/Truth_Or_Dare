import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three'
import { useAuthContext } from './hooks/useAuthContext';
import { Route, Routes, Navigate } from 'react-router-dom'
import Accueille from './Accueille';
import { OpenProvider } from './context/OpenContext';
import Cube from './assets/cube';
import LogIn from './logIn';
import Sign from './assets/Sign';
import Ami from './ami';
import PageAccueille from './assets/PageAccueille';
function App() {
  const  { user } = useAuthContext()



  return (
   <div className='' >
   <Routes>
   <Route exact path="/" element={<Accueille />} />
   <Route exact path="/Login" element={ !user ? <LogIn /> : <Navigate to="/accueille"/>} />
   <Route exact path="/sign" element={ !user ?  <Sign/> : <Navigate to="/"/>} />
   <Route exact path="/accueille" element={user ? <PageAccueille/> : <Navigate to="/Login" />} />
   <Route exact path="/personne" element={user ? <Ami/> : <Navigate to="/Login" />} />
   </Routes>
    
   </div>
  )
}

export default App
