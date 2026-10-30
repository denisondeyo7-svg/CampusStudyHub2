import SidebarLogo from "./assets/logo.png"
import image1 from "./assets/ETn3AAsFMkPA_-NciUOrnhcb6C-E_uqZOe2bF4ZaIYYsyliyaybpDFS9gJUI8Vkmg2SxEZCqzVeSZGBihqD5ya1BSovfZNFfbfK8BnOxmgL-8QXetk7vCLgJMXt9Tci_MF4nVl-2TDl1G8nmWM3XPrBu3ZdxMl8jigkseFkis_AHQVmFHNX6fa.jpg"
import image2 from "./assets/Ej5aH_TB3yBICdOTnC0EK-9Q9XVb-_ok-8apZ4Lsr_PLRcKSz65RPUm8A-YH-3xaSkCtPi1Lv-mcUEfE_IimiKG0Zdz3EkuWaZ-w4tritlzy2RZ7p51_5Kl3-vPKLH6Ev_V3HevCsujoHMrDneoB0D2iTT108I5HOHf4qAdVNNvw57Eckd17Wc.jpg"
import image3 from "./assets/logo.png"
import { useState } from "react"


function LandingPage (){

    const[open,setopenbox]=useState(false);

    const boxes=[
        {number:"1",boxTitle:"Today's Class",boxContent:"Timetable for today goes here"},
        {number:"2",boxTitle:"Deadlines", boxContent:"Deadlines goes here limit 4"},
        {number:"3",boxTitle:"News & Events",boxContent:"News and events goes here limit 4"},
    ];


    const AboutContents= [
        {number:"1" ,small:"Hear from us" ,h1:"About Us",Content:"At Campus Study Hub, we ensure that you never miss an important deadline. Stay informed with the latest campus news and updates, access your academic timetables, and find revision PDFs and study notes to support your learning journey. We're delighted to have you here.",lowerContent:"Campus Study Hub — your partner in academic success!"},
    ]

    const testimonials = [
        {number:"1",iopen:"fas fa-quote-left",content:"This is good work my boy" ,name:"Joh Doe" ,profession:"Vice Chancellor - Den University",iclose:"fas fa-quote-right"},
        {number:"2",iopen:"fas fa-quote-left",content:"At Campus Study Hub, we ensure that you never miss an important deadline" ,name:"Joh Doe" ,profession:"Profession goes here",iclose:"fas fa-quote-right"},
        {number:"3",iopen:"fas fa-quote-left",content:"At Campus Study Hub, we ensure that you never miss an important deadline" ,name:"Joh Doe" ,profession:"Profession goes here",iclose:"fas fa-quote-right"},
        
    ]

    const stats=[
        {number:"1", limit:"10+" ,name:"Members",i:"fas fa-user-graduate"},
        {number:"2", limit:"15+" ,name:"Notes",i:"fas fa-graduation-cap"},
        {number:"3", limit:"17+" ,name:"PDFs",i:"fas fa-layer-group"},
        {number:"4", limit:"7+" ,name:"Assessments",i:"fa-regular fa-file"}
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
                <br />
                <h1 className="abouth">About</h1>
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
<br />
                        {AboutContents.map((AboutContent)=>(
                            <div className="about-content" key={AboutContent.number}>
                                <small>{AboutContent.small} <i className="fas fa-graduation-cap"></i></small>
                                <h1>{AboutContent.h1}   <i className="fas fa-graduation-cap"></i></h1>
                                <p>{AboutContent.Content}</p>
                                <h2>{AboutContent.lowerContent}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                        
            </div>
<br />
            <div className="testimonials">
                <br />
                <h1 className="th1">What people say</h1>

                <div className="testimonials-container">
                    <p className="hear">Hear from people</p>
                    <div className="testimonial-card-container">
                        {testimonials.map((testimonial)=>(
                        <div className="testimonial-card"key={testimonial.number}>
                            <i className={testimonial.iopen}></i>
                            <p>{testimonial.content}</p>
                            <i className={testimonial.iclose}></i>
                            <h2>{testimonial.name} <br /><small className="profession">{testimonial.profession}</small></h2>
                            
                        </div>
                    ))}
                    </div>
                </div>

            </div>

            <br />
            <div className="stats">
                <h1>At glance</h1>
<br />
                <div className="stats-container">
                    {stats.map((stat)=>(
                        <div className="stats-card"key={stat.number}>
                            <h2>{stat.limit}</h2>
                            <div className="label">
                                <small>{stat.name}</small>
                                <i className={stat.i}></i>
                            </div>

                        </div>
                    ))}

                    

                </div>
            </div>

            <div className="whatsapp">
                <a href="https://wa.me/254726534460?text=Hello%20Denis%2C%20I%20came%20across%20Campus%20Study%20Hub%20online%20and%20was%20wondering%20if%20we%20could%20connect%20and%20discuss%20something.%20Would%20you%20be%20open%20to%20that%3F" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>


            <div className="online-chart"title="talk to with others" onClick={()=>setopenbox(!open)}>
                <i className="fas fa-message"></i>
            </div>


           { /*chartbox*/}

           {open &&(
                <div className="chatbox">
                    <div className="boxheader">
                        
                        <button onClick={()=>setopenbox(false)}><i className="fas fa-times"></i></button>
                    </div>
                    <div className="box-content">
                        <div className="message-container">
                    
                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div><div className="message-card">
                                <div className="message-top">
                                    <small>Lil Den</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>LD</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>
                            </div>
                                <div className="message-card">
                                <div className="message-top">
                                    <small>Del Mark</small>
                                    <div className="deletemessage">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                                <div className="bodydetails">
                                    <div className="dp">
                                        <p>DM</p>
                                    </div>
                                    <div className="message">
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro nemo.</small>
                                    </div>

                                    
                                </div>

                                
                            </div>
                        
                        </div>
                        <form action="" method="post">
                            <div className="input">
                                <textarea name="message" id="message"placeholder="Type something ..."></textarea>
                                <button type="submit"id="sendmessage" title="Send"><i className="fas fa-paper-plane"></i></button>
                            </div>
                        </form>

                    </div>
                </div>
           )}
            <br /><br />
        </section>
    )
}

export default LandingPage