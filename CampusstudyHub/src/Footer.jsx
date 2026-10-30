import { Link } from 'react-router-dom'

function Footer(){

    return(
        <footer>
            <div className="socials">
                <small>Find us On:</small>

                <div className="socials-links">
                    <a href=""><i className="fab fa-facebook"></i></a>
                    <a href=""><i className="fab fa-whatsapp"></i></a>
                    <a href="mailto: denisondeyo7@gmail.com"><i className="fas fa-envelope"></i></a>
                    <a href="tel:+254726534460"><i className="fas fa-phone"></i></a>
                </div>
            </div>
        
            <div className="mainfooter">
                
                

                <div className="academics">
                    <h2>Academics</h2>

                    <nav>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/Timetable">Timetable</Link>
                        <Link to="/Notes">      Notes</Link>
                        <Link to="/Assessments">      Assessments</Link>
                        <Link to="/RevisionPapers">      Revision Papers</Link>
                        
                    </nav>
                </div>

                <div className="academics">
                    <h2>More From Us</h2>

                    <nav>
                        <Link to="/About">About us</Link>
                        <Link to="/Testimonials">     Testimonials</Link>
                        <Link to="/Contact">     Contact Us</Link>
                        
                    </nav>
                </div>

                <div className="academics">
                    <h2> About Trends</h2>

                    <nav>
                        <Link to="/Deadlines">       Deadlines</Link>
                        <Link to="/News">     News & Events</Link>
                        <Link to="/Contact">     Contact Us</Link>
                        
                    </nav>
                </div>


            </div><br />
            <div className="subfooter">
                <small>©Campus Study Hub <br /> Developed By <a href="https://dentech-nu.vercel.app/">Denis</a></small>
            </div>
        </footer>
    )
}

export default Footer