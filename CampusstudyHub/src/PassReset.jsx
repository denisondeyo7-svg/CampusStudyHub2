import Logo from './assets/logo.png'
import {Link} from 'react-router-dom'
function PasswordReset() {
    return (
        <div className="login-form">
            <div className="login-logo">
                <img src={Logo} alt="login logo" />
            </div>

            <form action=""method='post'>
                <h2>Password Reset<i className='fas fa-gears'></i> </h2>

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
    );
}

export default PasswordReset;