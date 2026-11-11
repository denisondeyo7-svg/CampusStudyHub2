import {Link} from 'react-router-dom'
import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import AssessmentComponent from "../component/AssessmentComponent";

function Assessments() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar/>
            </aside>

            <div className="main">
                <AdminTop/>
<br />
                
                <div className="Members-container">
                    <h3 className="pageTitle">Assessments</h3>

                <div className="Addnotesbtn">
                    <Link to="/Tests" id="Addnotesbtn"><i className="fas fa-plus"></i> Add New</Link>
                </div>


                    <br />
                    <div className="members-list">
                        <AssessmentComponent/>
                    </div>
                </div>
                
                
            </div>

            
        </div>
    );
}

export default Assessments;