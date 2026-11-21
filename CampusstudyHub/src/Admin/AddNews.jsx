import Logo from '../assets/logo.png'
import Heroimage from "../assets/hero1.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddNews() {
    const navigate = useNavigate();

    const [message,setmessage]=useState("");

    function postnews(event){

        event.preventDefault();

        const form = event.target;

        fetch("http://localhost/CSHbackend/AddNews.php",{
            method:"post",
            body:new FormData(form),
            credentials:"include",
        })

        .then(response => response.json())
        .then(data=>{
            if(data.success){
                navigate("/NewsManagement");
            }
            else{
                setmessage(data.message);
            }
        })

        .catch(error =>{
            console.log("error:",error);
            setmessage("Something went wrong");
        })

    }
    return (
        <div className="form-img">
            <div className="formimage">
                <img src={Heroimage} alt="Hero image" />
            </div>

            <div className="login-form">

                <form onSubmit={postnews}>
                    <div className="login-logo">
                        <img src={Logo} alt="login logo" />
                    </div>

                    {message && <p className='messages'>{message}</p> }

                    <div className="form-title">
                        <h2>Add News <i className='fas fa-newspaper'></i> </h2>
                    </div>
                    
                    <div className="input">

                        <textarea name="description" id="message" placeholder="Type something ..." required></textarea>

                    </div>

                    <div className="input">

                        <input type="file" name='newsimage' id='newsimag' required/>

                    </div>

                    <button id="addbtn">Add News   </button>

                </form >
            </div >
        </div >
    );
}

export default AddNews;