
import './App.css'
import { Header } from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import logo from './assets/icons/brain.png'
// import { ErrorPage } from './pages/ErrorPage.jsx'

import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { Messages } from './pages/Messages.jsx'
import { Footer } from './components/Footer/Footer'
import { MyMessages } from './pages/MyMessages.jsx'
import list from './assets/icons/list.png'


const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});


function App() {


  return (
    <AuthProvider store={store}>
      <Router>
        <div className='container'>
          <Header link1="/Messages" link2="/MyMessages" a1="Mensagens" a2="Minhas Mensagens" img={logo} iconButton={list} pathLogin='/Login' pathRegister="/Register" pathHome='/' />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route element={<AuthOutlet fallbackPath='/login' />}>

              <Route path="/Messages" element={<Messages />} />

              <Route path="/Mymessages" element={<MyMessages />} />

            </Route>



          </Routes>

          <Footer />
        </div>
      </Router>

    </AuthProvider>

  )
}

export default App
