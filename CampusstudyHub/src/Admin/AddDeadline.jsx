import Logo from '../assets/logo.png'
import Heroimage from "../assets/hero1.png";
function AddDeadline() {
    return (
        <div className="form-img">
            <div className="formimage">
                <img src={Heroimage} alt="Hero image" />
            </div>
            <div className="login-form">

                <form action="" method='post'>
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