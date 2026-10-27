function About(){
    const AboutContents= [
        {number:"1" ,small:"Hear from us" ,h1:"Why Choose us",Content:"At Campus Study Hub, we ensure that you never miss an important deadline. Stay informed with the latest campus news and updates, access your academic timetables, and find revision PDFs and study notes to support your learning journey. ",lowerContent:"Your partner in academic success!"},
    ] 
    
   
    return(
        <div className="about-section">
           
            <br /><br /><br /><br />
            <h1><span className="dams">Abo</span>ut us</h1>
               
            <div className="about-content-wrapper">
                
                <div className="about-section-card">
                    
<br />
                    {AboutContents.map((AboutContent)=>(
                        <div className="about-card-content" key={AboutContent.number}>
                            <p><i className="fas fa-quote-left"></i></p>
                            <h1>{AboutContent.h1}   <i className="fas fa-graduation-cap"></i></h1>
                            <p>{AboutContent.Content}</p>
                            <h1>{AboutContent.lowerContent}</h1>
                        </div>
                    ))}
                    
            <button id="exploremore">Explore More <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        
            
                
            

              
             
            <br /><br />
        </div>
    )
}

export default About