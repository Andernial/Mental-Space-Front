import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'


import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'


function App() {
 

  return (
    <>
     <div className='container'>
      <Header link1="/" link2="placeholder" link3="placeholder" a1="placeholder" a2="placeholder" a3="placeholder" img="./src\assets\icons\brain.png"   iconButton="./src\assets\icons\list.svg" pathLogin='/Login' pathRegister="/Register" />
      
      <Outlet />
      <Footer icon='./src\assets\icons\list.svg'/>
     </div>
    </>
  )
}

export default App
