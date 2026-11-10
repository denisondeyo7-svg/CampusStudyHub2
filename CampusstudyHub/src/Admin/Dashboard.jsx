import AdminSidebar from "../AdminSidebar";
import AdminTop from "../component/AdminTop";
import AdminCards from "../component/AdminCards";
function Dashboard() {
    return (
        <div className="admin-dashboard">
            <aside>
                <AdminSidebar/>
            </aside>

            <div className="main">
                <AdminTop/>
<br />
                
                <div className="admin-card-container">
                    <div className="cards-wrapper">
                        <AdminCards/>
                    </div>

                    
                </div>
                
                
            </div>

            
        </div>
    );
}

export default Dashboard;