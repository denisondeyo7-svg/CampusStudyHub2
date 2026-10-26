import { useState } from "react"

function Menu(){

    const [Open,SetOpen]=useState(false);

    return(
        <>
            <button onClick={()=>SetOpen(!Open)} className="Menubtn"><i className="fas fa-bars"></i></button>
            {Open &&(
                <div className="menu">
                    <a href="">Home</a>
                    <a href="#about">About</a>
                    <a href="">News & Updates</a>
                    <a href="">Contact</a>

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