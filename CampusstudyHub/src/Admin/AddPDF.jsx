import Logo from '../assets/logo.png'
import Heroimage from "../assets/hero1.png";
function AddPDF() {
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
                        <h2>Add PDFS <i className='fas fa-book'></i> </h2>
                    </div>
                    

                    <div className="input">

                        <input type="title" name='title1' id='password1' required />
                        <label htmlFor="password1">Title</label>
                    </div>

                    <div className="progress">
                <div className="input">
                  
                    <select name="year" id="year" required>
                    <option>Select Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </div>

                <div className="input">
             
                    <select name="year" id="year" required>
                    <option>Current Semister</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                </div>
                </div>

                    <div className="input">

                        <select name="year" id="year" required>
                            <option>Select Course</option>

                            <option value="1">Information Technology</option>
                            <option value="1">Computer Science</option>

                        </select>


                    </div>

                    <div className="input">

                        <input type="file" name='pdf' id='newsimag' required />


                    </div>



                    <button id="addbtn">Add PDF   </button>

                </form >
            </div >

        </div>
    );
}

export default AddPDF;