import { useState } from "react"
import { Link } from 'react-router-dom'

function Navbar(){

    const[isCollapsed ,setisCollpsed] =useState(true);

    return(
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className="sidebar">
                <button onClick={()=>setisCollpsed(!isCollapsed)}>
                    <i className={isCollapsed ? "fas fa-bars" : "fas fa-times"}></i>
                    
                </button>
                
                <nav>
                    <small className="academics">
                    <div className="navlink">
                        <i className="fas fa-home"></i><Link to="/Dashboard">Dashboard</Link>
                    </div>

                    <div className="navlink">
                        <i className="fa-regular fa-calendar"></i><Link to="/Timetable">      Timetable</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-book"></i><Link to="/Notes">      Notes</Link>
                    </div>

                    <div className="navlink">
                        <i className="fa-regular fa-file"></i><Link to="/Assessments">      Assessments</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-layer-group"></i><Link to="/RevisionPapers">      Revision Papers</Link>
                    </div>


                    <div className="navlink">
                        <i className="fas fa-newspaper"></i><Link to="/News">     News & Events</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-pen"></i><Link to="/Deadlines">       Deadlines</Link>
                    </div>
            </small>
                    <div className="navlink">
                        <i className="fas fa-globe"></i><Link to="/About">     About Us</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-users"></i><Link to="/Testimonials">     Testimonials</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-phone"></i><Link to="/Contact">     Contact Us</Link>
                    </div>
                            
                    
                </nav>
            </div>
        </div>
    )
}

export default Navbar
