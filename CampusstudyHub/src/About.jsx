import image1 from "./assets/ETn3AAsFMkPA_-NciUOrnhcb6C-E_uqZOe2bF4ZaIYYsyliyaybpDFS9gJUI8Vkmg2SxEZCqzVeSZGBihqD5ya1BSovfZNFfbfK8BnOxmgL-8QXetk7vCLgJMXt9Tci_MF4nVl-2TDl1G8nmWM3XPrBu3ZdxMl8jigkseFkis_AHQVmFHNX6fa.jpg"
import image2 from "./assets/Ej5aH_TB3yBICdOTnC0EK-9Q9XVb-_ok-8apZ4Lsr_PLRcKSz65RPUm8A-YH-3xaSkCtPi1Lv-mcUEfE_IimiKG0Zdz3EkuWaZ-w4tritlzy2RZ7p51_5Kl3-vPKLH6Ev_V3HevCsujoHMrDneoB0D2iTT108I5HOHf4qAdVNNvw57Eckd17Wc.jpg"
import image3 from "./assets/1774128504685.png"


function About(){
    const AboutContents= [
        {number:"1" ,small:"Hear from us" ,h1:"About Us",Content:"At Campus Study Hub, we ensure that you never miss an important deadline. Stay informed with the latest campus news and updates, access your academic timetables, and find revision PDFs and study notes to support your learning journey. We're delighted to have you here.",lowerContent:"Campus Study Hub — your partner in academic success!"},
    ] 
    
    const AboutContent1= [
        {number:"1" ,Content:"Campus Study Hub is a student-focused web application designed to make academic life easier, more organized, and accessible. The platform brings essential academic resources and campus information together in one centralized hub, helping students access study materials, manage deadlines, stay updated on campus events, and keep track of important academic activities."},
        {number:"2",Content:"The system features a user-friendly dashboard, class and study resources, deadline management, campus news and events, user authentication, and a forgot-password feature to support account recovery."},
        {number:"3",Content:"Built with a focus on usability, accessibility, and practical problem-solving, Campus Study Hub demonstrates how web technology can simplify student life by making academic information easier to manage and access."}
    ]

    return(
        <div className="about">
           
            <h1>About us</h1>
            
               
            <div className="about-wrapper">
                
                <div className="about-content-card">
                    <div className="about-image">
                        <div className="images">
                            <img src={image1} alt="About image" />
                            <img src={image2} alt="About image" />
                            <img src={image3} alt="About image" />
                        </div>
                    </div>
<br />
                    {AboutContents.map((AboutContent)=>(
                        <div className="about-content" key={AboutContent.number}>
                            <p><i className="fas fa-quote-left"></i></p>
                            <h1>{AboutContent.h1}   <i className="fas fa-graduation-cap"></i></h1>
                            <p>{AboutContent.Content}</p>
                            <h2>{AboutContent.lowerContent}</h2>
                        </div>
                    ))}
                    
                </div>
            </div>
        
            <div className="about2">
                {AboutContent1.map((mycontent)=>(
                    <div className="card"key={mycontent.number}>
                       
                        <p>{mycontent.Content}</p>
                    </div>
                ))}
            
            </div>

              
             
            <br /><br />
        </div>
    )
}

export default About