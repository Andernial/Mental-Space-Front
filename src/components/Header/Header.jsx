import { useState } from 'react'
import './header.css'

export function Header({ link1, link2, link3, a1, a2, a3, img, iconButton }) {

    const [navOpen, setNavOpen] = useState(false)

    function handleNavOpen(){

        setNavOpen(!navOpen)

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
             
                    
                           <nav className='nav-header'>
                        <ul className='nav-ul' >
                            <li><a href={link1} className='nav-link'>{a1}</a></li>
                            <li><a href={link2} className='nav-link'>{a2}</a></li>
                            <li><a href={link3} className='nav-link'>{a3}</a></li>
                        </ul>
                             <button id='login'>Login</button>
                             <button id='cadastro'>Cadastro</button>
                        </nav>
                    


               
            </div>
        </header>
    )
}