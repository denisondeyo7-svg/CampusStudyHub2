import Menu from './Menu'
import logo from '../assets/logo.png'
function Indexheader(){

    return(
        <>
            <div className="my-index-header">
                <div className="my-index-header-logo">
                    <img src={logo} alt="" />

                    </div>

                    <nav className='links'>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#news">News & updates</a>
                        <a href="#contact">Contact</a>
                    
                    </nav>
                    <div className="call2actions">
                        <button id='loginbtn'>Login</button>
                        <button id='regbtn'>Get started</button>
                   </div>
                  <Menu/>
                        
            </div>

        </>
    )
}

export default Indexheader