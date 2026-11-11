import Logo from '../assets/logo.png'

function Test() {
    return (
        <div className="login-form">
            <div className="login-logo">
                <img src={Logo} alt="login logo" />
            </div>

            <form action="" method='post'>
                <h2>Add Assessments <i className='fas fa-book'></i> </h2>

                <div className="input">

                    <input type="file" name='pdf' id='newsimag' required />


                </div>




                <div className="input">

                    <input type="title" name='title1' id='password1' required />
                    <label htmlFor="password1">Title</label>
                </div>

                <div className="input">

                    <select name="year" id="year" required>
                        <option>Select Year</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>

                    </select>


                </div>

                <div className="input">

                    <select name="year" id="year" required>
                        <option>Select Course</option>

                        <option value="1">Information Technology</option>
                        <option value="1">Computer Science</option>

                    </select>


                </div>



                <button id="addbtn">Add Assessment ?  </button>

            </form >
        </div >
    );
}

export default Test;