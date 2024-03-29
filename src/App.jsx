import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <Header link1="placeholder" link2="placeholder" link3="placeholder" a1="placeholder" a2="placeholder" a3="placeholder" img="./src\assets\icons\brain.png"   iconButton="./src\assets\icons\list.svg"  />
     </div>
    </>
  )
}

export default App
