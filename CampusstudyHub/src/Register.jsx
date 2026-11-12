import Logo from "./assets/logo.png";
import Heroimage from "./assets/heroes.jpg";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="form-img">
        <div className="formimage">
            <img src={Heroimage} alt="Hero image" />
        </div>
        <div className="login-form">
            

            <form action="" method="post">
                <div className="login-logo">
                    <img src={Logo} alt="login logo" />
                </div>
                <div className="form-title">
                    <h2>
                    Account Creation <i className="fas fa-gear"></i>{" "}
                    </h2>
                </div>

                <div className="input">
                <i className="fa-regular fa-user"></i>
                <input type="text" name="username" id="username" required />
                <label htmlFor="username">Username</label>
                </div>

                <div className="input">
                <i className="fas fa-lock"></i>
                <input type="password" name="password1" id="password1" required />
                <label htmlFor="password1">Password</label>
                </div>

                <div className="input">
                <i className="fas fa-lock"></i>
                <input type="password" name="password2" id="password2" required />
                <label htmlFor="password2">Confirm Password</label>
                </div>

                <div className="input">
                <i className="fa-regular fa-envelope"></i>
                <input type="email" name="mail" id="mail" required />
                <label htmlFor="mail">Email</label>
                </div>

                <div className="progress">
                <div className="input">
                    <i className="fas fa-user-graduate"></i>
                    <select name="year" id="year" required>
                    <option>Select Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </div>

                <div className="input">
                    <i className="fas fa-graduation-cap"></i>
                    <select name="year" id="year" required>
                    <option>Current Semister</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                </div>
                </div>

                <div className="input">
                <i className="fas fa-list"></i>
                <select name="year" id="year" required>
                    <option>Select Course</option>

                    <option value="Information Technology">Information Technology</option>
                    <option value="Computer Science">Computer Science</option>
                </select>
                </div>

                <div className="form-links">
                <Link to="/Login" id="reg-link">
                    Already have an account?
                </Link>
                </div>

                <button id="login-btn">Create account ? </button>
            </form>
        </div>
    </div>
  );
}

export default Register;
