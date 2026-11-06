

function Accounts() {
    return (
        <div className="account-wrapper-container">
            <h1>Acco<span className="dams">unt</span></h1>
<br /><br />

            <div className="account-container">

                <button id="edit_profile">Edit Profile <i className="fas fa-edit"></i></button>
                <br /><br />
                <div className="account-card">
                    <div className="details">
                        <i className="fas fa-user"></i>
                        <div className="account-details">
                            <p>Username</p>
                            <small>Denis</small>
                        </div>
                    </div>

                    <div className="details">
                        <i className="fas fa-envelope"></i>
                        <div className="account-details">
                            <p>Email</p>
                            <small>denisondeyo7@gmail.com</small>
                        </div>
                    </div>

                    <div className="details">
                        <i className="fas fa-list"></i>
                         <div className="account-details">
                            <p>Current Year</p>
                            <small>Year 1</small>
                         </div>
                    </div>

                    <div className="details">
                        <i className="fas fa-graduation-cap"></i>
                        <div className="account-details">
                            <p>Course</p>
                            <small>Information Technology</small>
                        </div>
                    </div>

                </div>
            </div>
            <br /><br /><br/><br/>
        </div>
    );
}

export default Accounts;