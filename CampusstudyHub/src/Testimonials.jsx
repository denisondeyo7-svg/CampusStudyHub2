
function Testimonial(){

    
    const testimonials = [
        {number:"1",iopen:"fas fa-quote-left",content:"This is good work my boy" ,name:"Joh Doe" ,profession:"Vice Chancellor - Den University",iclose:"fas fa-quote-right"},
        {number:"2",iopen:"fas fa-quote-left",content:"At Campus Study Hub, we ensure that you never miss an important deadline" ,name:"Joh Doe" ,profession:"Profession goes here",iclose:"fas fa-quote-right"},
        {number:"3",iopen:"fas fa-quote-left",content:"At Campus Study Hub, we ensure that you never miss an important deadline" ,name:"Joh Doe" ,profession:"Profession goes here",iclose:"fas fa-quote-right"},
        
    ]
    return(
        <div className="main-testimonial">
            <h1>Testim<span className="dams">onials</span></h1>

            <div className="main-testimonial-wrapper">
                

                <div className="testimonials">
                <br />
                <h1 className="th1">Our Trust</h1>

                <div className="testimonials-container">
                   
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

            </div>
        </div>
    )
}

export default Testimonial