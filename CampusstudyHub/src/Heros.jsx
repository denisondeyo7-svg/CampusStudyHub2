import SidebarLogo from "./assets/file_000000002488722fb534a48b1deedd3a.png"
function LandingPage (){

    return(

        <section className="landingpage">
            <header>
                <div className="logo">
                    <img src={SidebarLogo} alt="" />
                    
                </div>
                
                <div className="brandname">
                    <h2>Campus Study Hub <br /><span className="Developer">Developed By Denis</span></h2>
                    
                </div>
            </header>

            <div className="landing-page-Content-Wrapper">
                <br />
                <div className="welcome-card">
                        
                    <h2>Welcome back Denis</h2>
                    
                    <p>Access all your notes, revision papers, and campus news while staying on track with your timetable and deadlines.</p>
                </div>
                <div className="cards-container">

                    <div className="card">
                        <div className="title">
                            <h2>Today's Class</h2>
                        </div>
                        <p>Timetable for today.</p>
                    </div>

                    <div className="card">
                        <div className="title">
                            <h2>Deadlines</h2>
                        </div>
                        <p>Access all your notes, revision papers, and campus news while staying on track with your timetable and deadlines.</p>
                    </div>

                    <div className="card">
                        <div className="title">
                            <h2>News & Events</h2>
                        </div>
                        <p>Access all your notes, revision papers, and campus news while staying on track with your timetable and deadlines.</p>
                    </div>
                </div>
            </div>
            <div className="whatsapp">
                <a href="https://wa.me/254726534460" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
        </section>
    )
}

export default LandingPage