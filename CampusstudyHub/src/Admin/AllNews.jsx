import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import NewsComponent from "../component/NewsComponent";
function AllNews() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar/>
            </aside>

            <div className="main">
                <AdminTop/>
<br />
                
                <div className="Members-container">
                    <h3 className="pageTitle">Manage News</h3>

                <div className="Addnotesbtn">
                    <button id="Addnotesbtn"><i className="fas fa-plus"></i> Add News</button>
                </div>


                    <br />
                    <div className="members-list">
                        <NewsComponent/>
                    </div>
                </div>
                
                
            </div>

            
        </div>
    );
}

export default AllNews;