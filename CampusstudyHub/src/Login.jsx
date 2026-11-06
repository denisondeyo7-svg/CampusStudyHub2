import Logo from './assets/logo.png'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div className="login-form">
            <div className="login-logo">
                <img src={Logo} alt="login logo" />
            </div>

            <form action=""method='post'>
                <h2>Welcome back <i className='fas fa-graduation-cap'></i> </h2>

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
    );
}

export default Login;