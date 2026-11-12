import Logo from './assets/logo.png'
import Heroimage from "./assets/heroes.jpg";
import {Link} from 'react-router-dom'
function PasswordReset() {
    return (
        <div className="form-img">
            <div className="formimage">
                <img src={Heroimage} alt="Hero image" />
                </div>
            <div className="login-form">
                

                <form action=""method='post'>
                    <div className="login-logo">
                        <img src={Logo} alt="login logo" />
                    </div>
                    <div className="form-title">
                        <h2>Password Reset<i className='fas fa-key'></i> </h2>
                    </div>
                    

                    <div className="input">
                        <i className='fa-regular fa-envelope'></i>
                        <input type="text"name='email' id='email'required />
                        <label htmlFor="email">Registered Email</label>

                    </div>

                    <div className="input">
                        <i className='fas fa-lock'></i>
                        <input type="password"name='password' id='password'required />
                        <label htmlFor="password">New Password</label>
                    </div>

                    <div className="input">
                        <i className='fas fa-lock'></i>
                        <input type="password"name='conpassword' id='conpassword'required />
                        <label htmlFor="conpassword">Confirm Password</label>
                    </div>

                

                    
                    <button id="login-btn">Update Password</button>

                    <div className="form-links">
                        <Link to="/Login"id='reg-link'>Back to Login</Link>
                    
                    </div>
                
                </form>
            </div>
        </div>
    );
}

export default PasswordReset;