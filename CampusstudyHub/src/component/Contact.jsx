
function Contact(){

    return(
        <div className="index-contact">
            <br /><br /><br />
            
            <h1>Need to <span className="dams">talk ?</span></h1>

            <div className="contact-wrapper">

                <div className="contact-card">
                    <div className="card1">
                        <h1>You can reach us through the following channels :</h1>

                        <div className="socials">
                            <i className="fab fa-whatsapp"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-x-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                            
                        </div>

                        <br />

                        <div className="reach">
                            <small>Email: <a href="mailto:denisondeyo7@gmail.com">denisondeyo7@gmail.com</a></small>
                            <small>Phone: <a href="tel:+254726534460">0726534460</a> </small>
                            <small>Location: KakamegaTown-Kenya </small>
                            
                        </div>
                    </div>

                    <div className="card2">
                        <form action="" method="post">
                            <h2>Message us</h2>

                            <div className="input">
                                <input type="text"name="firstname" id="firstname"required />
                                <label htmlFor="firstname">Firstname</label>
                            </div>

                            <div className="input">
                                <input type="text"name="lastname" id="lastname"required />
                                <label htmlFor="lastname">Lastname</label>
                            </div>

                            <div className="input">
                                <input type="text"name="phone" id="phone"required />
                                <label htmlFor="phone">Phone number</label>
                            </div>

                            <div className="input">
                                <textarea name="message" id="message"required ></textarea>
                                <label htmlFor="message">Message </label>
                            </div>

                            

                            <div className="input">
                                <button id="sendmessage">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact