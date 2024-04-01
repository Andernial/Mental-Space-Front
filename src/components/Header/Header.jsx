import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import './header.css'



export function Header({ link1, link2, link3, a1, a2, a3, img, iconButton, pathLogin, pathRegister, pathHome }) {

    const [navOpen, setNavOpen] = useState(false)

    //

    

    const isAuth = useIsAuthenticated()
    const signOut = useSignOut()


    const navigate = useNavigate()

    function handleNavOpen() {
        setNavOpen(!navOpen)
        
    }

    function handleChangePage(path) {
        navigate(path)
        setNavOpen(false)
    }

    function handleLogout() {
        signOut()
        navigate("/")
        setNavOpen(false)
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
                        <li className='nav-li'> <Link to={link2} className='nav-link'>{a2}</Link> </li>
                        <li className='nav-li'> <Link to={link3} className='nav-link'>{a3}</Link> </li>
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
                            <p>placeholder</p>
                            <button id='logout' onClick={() => handleLogout()}>
                                Logout
                            </button>

                        </>}



                </nav>




            </div>
        </header>
    )
}