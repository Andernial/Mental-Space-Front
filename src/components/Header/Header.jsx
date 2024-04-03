import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { FetchApiData } from '../../utils/Request';

import './header.css'




export function Header({ link1, link2, a1, a2, img, iconButton, pathLogin, pathRegister, pathHome }) {

    const [navOpen, setNavOpen] = useState(false)
        
    //

    

    const isAuth = useIsAuthenticated()
    const signOut = useSignOut()
    const useHeader = useAuthHeader('auth.token')
    const authUser = useAuthUser()

    const navigate = useNavigate()

    function handleNavOpen() {
        setNavOpen(!navOpen)
        
    }

    function handleChangePage(path) {
        navigate(path)
        setNavOpen(false)
    }

   async function handleLogout() {
        try {
            const token = useHeader.replace('x-acess-token ', '')
            await FetchApiData('get',`https://mental-space-api.up.railway.app/user/logout-user`,'',token)

            signOut()
            navigate("/Login")
            setNavOpen(false)
          

        } catch (error) {
            console.error(error)
        }
        
     
    }


    return (
        <header className="main-header">
            <div className='logo'>
                <div className='full-logo'>
                    <img src={img} alt="logo" className='logo-img' onClick={() => { handleChangePage(pathHome) }} />
                    <h1 className='main-title'>Mental Space</h1>
                </div>

                <div className="button">
                    <button className={`nav-button ${navOpen ? 'open' : ''}`} onClick={handleNavOpen}><img src={iconButton} alt="icon" className='img-button' /></button>

                </div>
            </div>

            <div className={`main-nav ${navOpen ? 'open' : ''}`}>


                <nav className='nav-header'>
                    <ul className='nav-ul' >
                        <li className='nav-li'> <Link to={link1} className='nav-link' onClick={handleNavOpen} id='mensagens-link'>{a1}</Link> </li>
                        <li className='nav-li'> <Link to={link2} className='nav-link' onClick={handleNavOpen} id='minhas-mensagens-link'>{a2}</Link> </li>
                    </ul>

                    {!isAuth ? (
                        <>
                            <button id='login' onClick={() => handleChangePage(pathLogin)}>
                                Login
                            </button>
                            <button id='cadastro' onClick={() => handleChangePage(pathRegister)}>
                                Cadastro
                            </button>
                        </>
                    ) :

                        <>
                            <div className='user-profile'>
                            <p >usuario: {authUser.name}</p>
                            <button id='logout' onClick={() => handleLogout()}>
                                Logout
                            </button>
                            </div>
                            

                        </>}



                </nav>




            </div>
        </header>
    )
}


