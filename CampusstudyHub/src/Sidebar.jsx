import { useState } from "react"

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
                        <i className="fas fa-home"></i><a href="">Dashboard</a>
                    </div>

                    <div className="navlink">
                        <i className="fa-regular fa-calendar"></i><a href="">      Timetable</a>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-book"></i><a href="">      Notes</a>
                    </div>

                    <div className="navlink">
                        <i className="fa-regular fa-file"></i><a href="">      Assessments</a>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-layer-group"></i><a href="">      Revision Papers</a>
                    </div>


                    <div className="navlink">
                        <i className="fas fa-newspaper"></i><a href="">     News & Events</a>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-pen"></i><a href="">       Deadlines</a>
                    </div>
            </small>
                    <div className="navlink">
                        <i className="fas fa-globe"></i><a href="">     More from Us</a>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-users"></i><a href="">     Testimonials</a>
                    </div>

                    <div className="navlink">
                        <i className="fas fa-phone"></i><a href="">     Contact Support</a>
                    </div>
                            
                    
                </nav>
            </div>
        </div>
    )
}

export default Navbar
