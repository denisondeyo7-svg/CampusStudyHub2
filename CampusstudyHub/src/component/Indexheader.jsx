import { useState } from 'react'
import Menu from './Menu'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Indexheader() {

    const [activeLink, setActiveLink] = useState('#home');

  
    const navLinks = [
        { id: '#home', label: 'Home' },
        { id: '#about', label: 'About' },
        { id: '#news', label: 'News & updates' },
        { id: '#contact', label: 'Contact' }
    ];

    return (
        <>
            <div className="my-index-header">
                <div className="my-index-header-logo">
                    <img src={logo} alt="logo" />
                </div>

                <nav className='links'>
                    {navLinks.map((link) => (
                        <a 
                            key={link.id}
                            href={link.id} 
                           
                            onClick={() => setActiveLink(link.id)}
                            
                            className={activeLink === link.id ? 'active' : ''}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="call2actions">
                    <Link to="/Login" id='loginbtn'>Login</Link>
                    <Link to="/Register" id='regbtn'>Get started</Link>
                </div>
                <Menu />
            </div>
        </>
    )
}

export default Indexheader
