import SidebarLogo from "./assets/file_000000002488722fb534a48b1deedd3a.png"
import image1 from "./assets/ETn3AAsFMkPA_-NciUOrnhcb6C-E_uqZOe2bF4ZaIYYsyliyaybpDFS9gJUI8Vkmg2SxEZCqzVeSZGBihqD5ya1BSovfZNFfbfK8BnOxmgL-8QXetk7vCLgJMXt9Tci_MF4nVl-2TDl1G8nmWM3XPrBu3ZdxMl8jigkseFkis_AHQVmFHNX6fa.jpg"
import image2 from "./assets/Ej5aH_TB3yBICdOTnC0EK-9Q9XVb-_ok-8apZ4Lsr_PLRcKSz65RPUm8A-YH-3xaSkCtPi1Lv-mcUEfE_IimiKG0Zdz3EkuWaZ-w4tritlzy2RZ7p51_5Kl3-vPKLH6Ev_V3HevCsujoHMrDneoB0D2iTT108I5HOHf4qAdVNNvw57Eckd17Wc.jpg"
import image3 from "./assets/1774128504685.png"
function LandingPage (){
    const boxes=[
        {number:"1",boxTitle:"Today's Class",boxContent:"Timetable for today goes here"},
        {number:"2",boxTitle:"Deadlines", boxContent:"Deadlines goes here limit 4"},
        {number:"3",boxTitle:"News & Events",boxContent:"News and events goes here limit 4"},
    ];


    const AboutContents= [
        {number:"1" ,small:"Hear from us." ,h1:"About Us",Content:"At Campus Study Hub, we ensure that you never miss an important deadline. Stay informed with the latest campus news and updates, access your academic timetables, and find revision PDFs and study notes to support your learning journey. We're delighted to have you here.",lowerContent:"Welcome to Campus Study Hub — your partner in academic success!"},
    ]
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

                    {boxes.map((box)=>(
                        <div className="card"key={box.number}>
                            <div className="title">
                                <h2>{box.boxTitle}</h2>
                            </div>
                            <p>{box.boxContent}</p>
                        </div>
                    ))}

                    
                </div>

                
            </div>

            <div className="about">
                <h1>Campus Study Hub</h1>
                    <br />
                <div className="about-wrapper">
                    <div className="about-content-card">
                        <div className="about-image">
                            <div className="images">
                                <img src={image1} alt="About image" />
                                <img src={image2} alt="About image" />
                                <img src={image3} alt="About image" />
                            </div>
                        </div>

                        {AboutContents.map((AboutContent)=>(
                            <div className="about-content" key={AboutContent.number}>
                                <small>{AboutContent.small}</small>
                                <h1>{AboutContent.h1}</h1>
                                <p>{AboutContent.Content}</p>
                                <h2>{AboutContent.lowerContent}</h2>
                            </div>
                        ))}
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