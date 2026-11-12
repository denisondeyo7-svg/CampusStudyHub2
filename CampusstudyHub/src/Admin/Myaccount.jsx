import {Link} from 'react-router-dom'
import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import UpdateAccount from "../component/UpdateAccount";
function Myaccount() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar />
            </aside>

            <div className="main">
                <AdminTop />
                <br />

                <div className="Members-container">
                    <h3 className="pageTitle">Account</h3>

                    <div className="Addnotesbtn">
                        <Link to="/Edit" id="Addnotesbtn"><i className="fas fa-plus"></i> Update Account</Link>
                    </div>


                    <br />
                    <div className="members-list">
                        <UpdateAccount />
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Myaccount;