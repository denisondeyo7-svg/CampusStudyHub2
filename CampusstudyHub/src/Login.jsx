import Logo from './assets/logo.png'
import Heroimage from "./assets/heroes.jpg";
import {Link} from 'react-router-dom'
function Login() {
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
                        <h2>Welcome back <i className='fas fa-graduation-cap'></i> </h2>
                    </div>

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