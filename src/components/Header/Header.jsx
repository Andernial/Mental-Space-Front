import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import './header.css'

export function Header({ link1, link2, link3, a1, a2, a3, img, iconButton }) {

    const [navOpen, setNavOpen] = useState(false)
    const navigate = useNavigate()

    function handleNavOpen(){

        setNavOpen(!navOpen)

    }

    function handleLogin(){
        navigate("/Login")
        setNavOpen(!navOpen)
    }

    function handleCadastro(){
        navigate("/Cadastro")
    }

    return (
        <header className="main-header">
            <div className='logo'>
                <div className='full-logo'>
                    <img src={img} alt="logo" className='logo-img' />
                    <h1 className='main-title'>Mental Space</h1>
                </div>

                <div className="button">
                    <button className={`nav-button ${navOpen ? 'open' : ''}`} onClick={handleNavOpen}><img src={iconButton} alt="icon" className='img-button' /></button>

                </div>
            </div>

            <div className={`main-nav ${navOpen ? 'open' : ''}`}>
                     {navOpen && (
                    
                           <nav className='nav-header'>
                        <ul className='nav-ul' >
                            <li> <Link to={link1} className='nav-link' onClick={handleNavOpen}>{a1}</Link> </li>
                            <li> <Link to={link2} className='nav-link'>{a2}</Link> </li>
                            <li> <Link to={link3} className='nav-link'>{a3}</Link> </li>
                        </ul>
                             <button id='login' onClick={handleLogin}>Login</button>
                             <button id='cadastro'>Cadastro</button>
                        </nav>
                    


                    )}
            </div>
        </header>
    )
}