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
                        <i className="fas fa-home"></i><Link to="/Dashboard" onClick={()=>setisCollpsed(!isCollapsed)}>Dashboard</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-history"></i><Link to="/Timetable" onClick={()=>setisCollpsed(!isCollapsed)}>      Timetable</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-book"></i><Link to="/Notes" onClick={()=>setisCollpsed(!isCollapsed)}>      Notes</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-tasks"></i><Link to="/Assessments" onClick={()=>setisCollpsed(!isCollapsed)}>      Assessments</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-layer-group"></i><Link to="/RevisionPapers" onClick={()=>setisCollpsed(!isCollapsed)}>      Revision Papers</Link>
                    </div>


                    <div className="navlink">
                        <i className="fas fa-newspaper"></i><Link to="/News"    onClick={()=>setisCollpsed(!isCollapsed)}>     News & Events</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-bell"></i><Link to="/Deadlines"    onClick={()=>setisCollpsed(!isCollapsed)}>       Deadlines</Link>
                    </div>
            </small>
                    <div className="navlink">
                        <i className="fas fa-globe-americas"></i><Link to="/About"  onClick={()=>setisCollpsed(!isCollapsed)}>     About Us</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-users"></i><Link to="/Testimonials"    onClick={()=>setisCollpsed(!isCollapsed)}>     Testimonials</Link>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-phone"></i><Link to="/Contact" onClick={()=>setisCollpsed(!isCollapsed)}>     Contact Us</Link>
                    </div>
                            
                    
                </nav>
            </div>
        </div>
    )
}

export default Navbar
