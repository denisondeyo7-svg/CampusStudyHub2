import Menu from './Menu'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Indexheader(){

    return(
        <>
            <div className="my-index-header">
                <div className="my-index-header-logo">
                    <img src={logo} alt="logo" />

                    </div>

                    <nav className='links'>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#news">News & updates</a>
                        <a href="#contact">Contact</a>
                    
                    </nav>
                    <div className="call2actions">
                        <Link to="/Login" id='loginbtn'>Login</Link>
                        <Link to="/Register" id='regbtn'>Get started</Link>
                   </div>
                  <Menu/>
                        
            </div>

        </>
    )
}

export default Indexheader