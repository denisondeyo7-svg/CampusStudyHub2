import Logo from '../assets/logo.png'

function AddNews() {
    return (
        <div className="login-form">
            <div className="login-logo">
                <img src={Logo} alt="login logo" />
            </div>

            <form action="" method='post'>
                <h2>Add News <i className='fas fa-newspaper'></i> </h2>

                <div className="input">

                    <input type="file" name='newsimag' id='newsimag' required />


                </div>




                <div className="input">

                    <textarea name="description" id="message" placeholder='News Content' required></textarea>


                </div>



                <button id="addbtn">Add News ?  </button>

            </form >
        </div >
    );
}

export default AddNews;