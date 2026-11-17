import Logo from './assets/logo.png'
import Heroimage from "./assets/heroes.jpg";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate =useNavigate();

    const [message,setmessage]=useState("");

    function Loginuser(event){
        event.preventDefault();

        const form = event.target;


        fetch("http://localhost/CSHbackend/Login.php",{
            method:'POST',
            body: new FormData(form),
            credentials:"include",

            
        })

        .then(response=>response.json())
        
        .then(data=>{
            if(data.success){
                navigate("/Dashboard");
            }

            if(data.admin){
                navigate("/Home");
            }

            else{
                setmessage(data.message);
            }
        })

        .catch(error => {
            console.log("error:",error);
            setmessage("Something went wrong try again.");
        });


    }

    return (
        <div className="form-img">
            <div className="formimage">
                <img src={Heroimage} alt="Hero image" />
            </div>
            <div className="login-form">
               

                <form onSubmit={Loginuser}>
                    <div className="login-logo">
                        <img src={Logo} alt="login logo" />
                    </div>
                    <div className="form-title">
                        <h2>Welcome back <i className='fas fa-graduation-cap'></i> </h2>
                    </div>
                    {message && <p className='messages'>{message}</p> }

                    <div className="input">
                        <i className='fa-regular fa-user'></i>
                        <input type="text"name='username' id='username'required />
                        <label htmlFor="username">Username</label>

                    </div>

                    <div className="input">
                        <i className='fas fa-lock'></i>
                        <input type="password"name='password' id='password'required />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="form-links">
                        <Link to="/Register"id='reg-link'>No account?</Link>
                        <Link to="/PasswordReset"id='recover-link'>Forgot Password?</Link>
                    </div>

                    
                    <button id="login-btn">Login  </button>
                
                </form>
            </div>
        </div>
    );
}

export default Login;