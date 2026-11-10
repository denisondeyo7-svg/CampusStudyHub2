

function UpdateAccount() {
    return (
        <div className="account-wrapper-container">

            <br /><br />

            <div className="account-container">


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
                        <i className="fas fa-graduation-cap"></i>
                        <div className="account-details">
                            <p>Passkey</p>
                            <small>********</small>
                        </div>
                    </div>

                    <br />

                    <div className="details">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <div className="account-details">
                            <a href="" className="pageTitle">Logout</a>

                        </div>
                    </div>



                </div>
            </div>
            <br /><br /><br /><br />
        </div>
    );
}

export default UpdateAccount;