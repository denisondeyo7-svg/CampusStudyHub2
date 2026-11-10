import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import DeadlineComponent from "../component/DeadlineComponent";
function AllDeadlines() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar />
            </aside>

            <div className="main">
                <AdminTop />
                <br />

                <div className="Members-container">
                    <h3 className="pageTitle">Manage Deadlines</h3>

                    <div className="Addnotesbtn">
                        <button id="Addnotesbtn"><i className="fas fa-plus"></i> Add Deadline</button>
                    </div>


                    <br />
                    <div className="members-list">
                        <DeadlineComponent />
                    </div>
                </div>


            </div>


        </div>
    );
}

export default AllDeadlines;