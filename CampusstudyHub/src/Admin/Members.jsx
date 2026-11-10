import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import MembersComponent from "../component/MembersComponent";
function Members() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar/>
            </aside>

            <div className="main">
                <AdminTop/>
<br />
                
                <div className="Members-container">
                    <h3 className="pageTitle">Members</h3>

                    <br />
                    <div className="members-list">
                        <MembersComponent/>
                    </div>
                </div>
                
                
            </div>

            
        </div>
    );
}

export default Members;