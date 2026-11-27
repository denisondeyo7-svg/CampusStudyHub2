import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
function AdminTop() {
    const navigate =useNavigate();
    const [User,setUser] = useState("");
    
        useEffect(() => {
            fetch("http://localhost/CSHbackend/checksession.php", {
                credentials: "include"
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Session not found");
                }
    
                return response.json();
            })
            .then(data => {
                setUser(data.username);
            })
            .catch(error => {
                console.log("Session error:", error);
            });
        }, []);


        //logout

        function logout(){
        fetch("http://localhost/CSHbackend/Logout.php",{
            method:"post",
            Credentials:"include",
        })

        .then(response => response.json())
        .then(logout_data => {
            if(logout_data.loggedout) {
                navigate("/Login");
            }
            
        })

        .catch(error => {
            console.log("Logout error:", error);
        });
    }
    return (

        <div className="top-content">
          
            
            
            <h2><i className="fa-solid fa-user-shield"></i>   Welcome back {User}</h2>

            <div className="logout-admin" onClick={logout}>
                <p>Logout <i className="fas fa-right-to-bracket"></i></p>
            </div>
           
           
        </div>

    );
}

export default AdminTop;