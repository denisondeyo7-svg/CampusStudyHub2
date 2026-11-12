import {Link} from 'react-router-dom'
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

                <div className="admin-card-container">
                    
                    <fieldset>
                        <legend>Quick Actions</legend>
                        <Link to="/AddTimetable">Add Timetable</Link>
                        <Link to="/AddNotes">AddNotes</Link>
                        <Link to="/AddRevisionPDFs">AddRevisionPDFs</Link>
                        <Link to="/Tests">Add Tests</Link>
                        <Link to="/AddNews">Add News</Link>
                        <Link to="/AddDeadline">Add Deadline</Link>
                    </fieldset>

                    
                </div>

                
                
            </div>

            
        </div>
    );
}

export default Dashboard;