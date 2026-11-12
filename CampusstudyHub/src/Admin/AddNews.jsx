import Logo from '../assets/logo.png'
import Heroimage from "../assets/hero1.png";
function AddNews() {
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
                        <h2>Add News <i className='fas fa-newspaper'></i> </h2>
                    </div>
                    

                    
                    <div className="input">

                        <textarea name="description" id="message" placeholder="Type something ..." required></textarea>


                    </div>

                    <div className="input">

                        <input type="file" name='pdf' id='newsimag' required/>


                    </div>



                    <button id="addbtn">Add News   </button>

                </form >
            </div >
        </div >
    );
}

export default AddNews;