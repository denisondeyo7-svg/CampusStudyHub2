import Logo from '../assets/logo.png'
import Heroimage from "../assets/hero1.png";
function EditAccount(){
    return(
        <div className="form-img">
            <div className="formimage">
                <img src={Heroimage} alt="Hero image" />
            </div>
            <div className="login-form">

                <div className="login-logo">
                    <img src={Logo} alt="login logo" />
                </div>

                <form action=""method='post'>
                    <div className="form-title">
                        <h2>Update Account <i className='fas fa-gear'></i> </h2>
                    </div>
                    

                    <div className="input">
                        <i className='fa-regular fa-user'></i>
                        <input type="text"name='username' id='username'value="1290Den"required />
                        

                    </div>
                    

                    <div className="input">
                        <i className='fa-regular fa-envelope'></i>
                        <input type="email"name='mail' id='mail'value="example@gmail.com"required />
                        

                    </div>

                    <div className="input">
                        <i className='fas fa-key'></i>
                        <input type="text"name='password' id='password'value="1290den001"required />
                        

                    </div>
                                        
                    
                   <button id="login-btn">Commit Changes </button>
                    
                </form>
            </div>
        </div>
    )
}

export default EditAccount;