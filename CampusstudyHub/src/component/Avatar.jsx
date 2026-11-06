import { useState } from "react";
import {Link} from "react-router-dom"
function Avatar() {

    const [Isopen ,setIsopen]=useState(false);

    return (
        <div className="logout" title="Account">
            <a onClick={()=> setIsopen(!Isopen)} id="logoutbtn">D<i className={Isopen? "fas fa-angle-up":"fas fa-angle-down"}></i></a>

            {(Isopen &&
                <div className="profile-box">
                    <div className="user">
                        <Link to="/Accounts"><i className="fa-regular fa-user" onClick={()=> setIsopen(false)}></i>Account</Link>
                    </div>
                    <div className="logoutbtn">
                        <a href=""><i className="fas fa-power-off" onClick={()=> setIsopen(false)}></i>Logout</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Avatar;