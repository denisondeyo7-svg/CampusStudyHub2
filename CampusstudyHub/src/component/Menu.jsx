import { useState } from "react"

function Menu(){

    const [Open,SetOpen]=useState(false);

    return(
        <>
            <button onClick={()=>SetOpen(!Open)} className="Menubtn"><i className={Open ? 'fas fa-xmark' :'fas fa-bars'}></i></button>
            {Open &&(
                <div className="menu">
                    <i className="fas fa-xmark" title="Close"onClick={()=>SetOpen(!Open)}></i>

                    <a href="#home" onClick={()=> SetOpen(false)}>Home</a>
                    <a href="#about" onClick={()=> SetOpen(false)}>About</a>
                    <a href="#news" onClick={()=> SetOpen(false)}>News & Updates</a>
                    <a href="#contact" onClick={()=> SetOpen(false)}>Contact</a>

                    <div className="call2actions">
                        <button id='myloginbtn'>Login</button>
                        <button id='myregbtn'>Get started</button>
                   </div>
                </div>
            )}
        </>
    )
}
export default Menu