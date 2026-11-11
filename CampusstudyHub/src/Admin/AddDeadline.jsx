import Logo from '../assets/logo.png'

function AddDeadline() {
    return (
        <div className="login-form">
            <div className="login-logo">
                <img src={Logo} alt="login logo" />
            </div>

            <form action="" method='post'>
                <h2>Add Deadline <i className='fas fa-briefcase'></i> </h2>

            
                <div className="input">                  
                    <textarea name="description" id="message" placeholder="Enter deadline here"required></textarea>
                    
                </div>


            
                <button id="addbtn">Add Deadline ?  </button>

            </form >
        </div >
    );
}

export default AddDeadline;