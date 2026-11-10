import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import NotesComponent from "../component/NotesComponent";
function AllNotes() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar/>
            </aside>

            <div className="main">
                <AdminTop/>
<br />
                
                <div className="Members-container">
                    <h3 className="pageTitle">Manage Notes</h3>

                <div className="Addnotesbtn">
                    <button id="Addnotesbtn"><i className="fas fa-plus"></i> Add Notes</button>
                </div>


                    <br />
                    <div className="members-list">
                        <NotesComponent/>
                    </div>
                </div>
                
                
            </div>

            
        </div>
    );
}

export default AllNotes;