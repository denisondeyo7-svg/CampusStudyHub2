import Logo from '../assets/logo.png'
import Heroimage from "../assets/hero1.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddDeadline() {

    const navigate = useNavigate();
    const [mymessage,setmessage]= useState("");

    function adddeadline(event){
        event.preventDefault();

        const form = event.target;

        fetch("http://localhost/CSHbackend/Adddeadline.php/",{
            method:"POST",
            body:new FormData(form),
            credentials:"include",
        })

        .then(result=>result.json())
        .then(data =>{
            if(data.success){
                navigate("/DeadlinesManagement");
            }
            else{
                setmessage(data.message);
            }
        })

        .catch(error =>{
            console.log("Error:",error);
            setmessage("Something went wrong");
        })
    }
    return (
        <div className="form-img">
            <div className="formimage">
                <img src={Heroimage} alt="Hero image" />
            </div>
            <div className="login-form">

                <form onSubmit={adddeadline}>
                    <div className="login-logo">
                        <img src={Logo} alt="login logo" />
                    </div>

                    <div className="form-title">
                        <h2>Add a Deadline <i className='fas fa-briefcase'></i> </h2>
                    </div>
                    

                
                    <div className="input">                  
                        <textarea name="description" id="message" placeholder="Enter deadline here"required></textarea>
                        
                    </div>


                
                    <button id="addbtn">Add Deadline   </button>

                </form >
            </div >

        </div>
    );
}

export default AddDeadline;