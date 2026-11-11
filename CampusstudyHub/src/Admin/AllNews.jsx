import { Link } from 'react-router-dom'
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
                    <Link to="/AddNews" id="Addnotesbtn"><i className="fas fa-plus"></i> Add News</Link>
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