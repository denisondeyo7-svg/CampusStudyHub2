import { useState } from "react";
import { Link } from 'react-router-dom'
function AdminSidebar() {
    const [Broken, setBroken] = useState(true);
    return (
        <>
            <div className={`sidebar-admin ${Broken ? "Broke" : ""}`}>
                <div className="sidebar-admin">
                    <>
                        <i className={Broken ? "fas fa-bars" : "fas fa-xmark"} id="admin-menu-btn" onClick={
                            () => setBroken(!Broken)
                        }></i>

                    </>

                    <nav>

                        <div className="admin-navs">
                            <i className="fa-regular fa-home"></i><Link to="/Home">Dashboard</Link>
                        </div>

                        <div className="admin-navs">
                            <i className="fa-regular fa-user"></i><Link to="/Members">      Members</Link>
                        </div>

                        <div className="admin-navs">
                            <i className="fas fa-book"></i><Link to="/NotesManagement">      Notes</Link>
                        </div>

                        <div className="admin-navs">
                            <i className="fas fa-tasks"></i><Link to="/AssessmentsTests">      Assessments</Link>
                        </div>

                        <div className="admin-navs">
                            <i className="fas fa-layer-group"></i><Link to="/RevisionPDFs">      Revision Papers</Link>
                        </div>


                        <div className="admin-navs">
                            <i className="fas fa-newspaper"></i><Link to="/NewsManagement"   >     News & Events</Link>
                        </div>

                        <div className="admin-navs">
                            <i className="fas fa-bell"></i><Link to="/DeadlinesManagement"   >       Deadlines</Link>
                        </div>

                        <div className="admin-navs">
                            <i className="fas fa-gear"></i><Link to="/Myaccount"   >       Account</Link>
                        </div>

                        <div className="admin-navs">
                            <i className="fas fa-power-off"></i><a href="">       Logout</a>
                        </div>

                    </nav>
                </div>



            </div>
        </>
    );
}

export default AdminSidebar;