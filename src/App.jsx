
import './App.css'
import { Header } from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
// import { ErrorPage } from './pages/ErrorPage.jsx'

import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { Messages } from './pages/Messages.jsx'
import { PrivateRoutes } from './utils/PrivateRoutes.jsx'
// import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { MyMessages } from './pages/MyMessages.jsx'


const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});


function App() {


  return (
    <AuthProvider store={store}>
    <Router>
      <div className='container'>
        <Header link1="/Messages" link2="/MyMessages" link3="placeholder" a1="Mensagens" a2="Minhas Mensagens" a3="placeholder" img="./src\assets\icons\brain.png" iconButton="./src\assets\icons\list.svg" pathLogin='/Login' pathRegister="/Register" pathHome='/' />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

            <Route element={<AuthOutlet fallbackPath='/login' />}>
              
            <Route path="/Messages" element={<Messages />} />

            <Route path="/Mymessages" element={<MyMessages />} />
        
            </Route>
          
       

        </Routes>

        <Footer icon='./src\assets\icons\list.svg' />
      </div>
    </Router>
    
    </AuthProvider>

  )
}

export default App
