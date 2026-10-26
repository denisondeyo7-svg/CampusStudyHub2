import image1 from "../assets/ETn3AAsFMkPA_-NciUOrnhcb6C-E_uqZOe2bF4ZaIYYsyliyaybpDFS9gJUI8Vkmg2SxEZCqzVeSZGBihqD5ya1BSovfZNFfbfK8BnOxmgL-8QXetk7vCLgJMXt9Tci_MF4nVl-2TDl1G8nmWM3XPrBu3ZdxMl8jigkseFkis_AHQVmFHNX6fa.jpg"
import image2 from "../assets/Ej5aH_TB3yBICdOTnC0EK-9Q9XVb-_ok-8apZ4Lsr_PLRcKSz65RPUm8A-YH-3xaSkCtPi1Lv-mcUEfE_IimiKG0Zdz3EkuWaZ-w4tritlzy2RZ7p51_5Kl3-vPKLH6Ev_V3HevCsujoHMrDneoB0D2iTT108I5HOHf4qAdVNNvw57Eckd17Wc.jpg"
import image3 from "../assets/hero.png"
import Explore from "./Call2actions"


function About(){
    const AboutContents= [
        {number:"1" ,small:"Hear from us" ,h1:"Why Choose us",Content:"At Campus Study Hub, we ensure that you never miss an important deadline. Stay informed with the latest campus news and updates, access your academic timetables, and find revision PDFs and study notes to support your learning journey. We're delighted to have you here.",lowerContent:"Campus Study Hub — your partner in academic success!"},
    ] 
    
   
    return(
        <div className="about">
           
            <small>Campus <span className="dams">Study Hub</span></small>
            <h1><span className="dams">Abo</span>ut us</h1>
               
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
                
            <Explore/>
            </div>

              
             
            <br /><br />
        </div>
    )
}

export default About