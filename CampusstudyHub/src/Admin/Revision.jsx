import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import RevisionComponent from "../component/RevisionComponent";
function Revision() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar/>
            </aside>

            <div className="main">
                <AdminTop/>
<br />
                
                <div className="Members-container">
                    <h3 className="pageTitle">Manage PDFs</h3>

                <div className="Addnotesbtn">
                    <button id="Addnotesbtn"><i className="fas fa-plus"></i> Add PDF</button>
                </div>


                    <br />
                    <div className="members-list">
                        <RevisionComponent/>
                    </div>
                </div>
                
                
            </div>

            
        </div>
    );
}

export default Revision;