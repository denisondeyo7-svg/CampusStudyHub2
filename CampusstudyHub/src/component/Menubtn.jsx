import { useState } from "react"
function Menu(){

    const [Open,SetOpen]=useState(false);
    return(
        <>
            <button onClick={()=>SetOpen(!Open)} className="Menubtn"><i className="fas fa-bars"></i></button>

            {Open &&(
                <div className="menu">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">News & Updates</a>
                    <a href="">Contact</a>
                </div>
            )}
        </>
    )
}
export default Menu