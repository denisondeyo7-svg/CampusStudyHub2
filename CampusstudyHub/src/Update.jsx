import Logo from './assets/logo.png'
import Heroimage from "./assets/heroes.jpg";
function Update(){
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
                        <i className='fas fa-user-graduate'></i>
                        <select name="year" id="year"required>
                            <option>Select Year</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            
                        </select>
                        

                    </div>

                    <div className="input">
                        <i className='fas fa-list'></i>
                        <select name="year" id="year"required>
                            <option>Select Course</option>
                            
                            <option value="Information Technology">Information Technology</option>
                            <option value="Computer Science">Computer Science</option>
                            
                        </select>
                        

                    </div>
                    
                    <button id="login-btn">Commit Changes </button>
                    
                </form>
            </div>
        </div>
    )
}

export default Update;