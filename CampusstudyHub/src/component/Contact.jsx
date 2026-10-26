
function Contact(){

    return(
        <div className="contact">
            

            <div className="contact-wrapper">
                <h1><span className="small">Let's talk</span> <br />Get in <span className="dams">touch</span></h1>

                <div className="contact-card">
                    <div className="card1">
                        <h1>You can reach us through the following channels</h1>

                        <div className="socials">
                            <i className="fab fa-whatsapp"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-x-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fas fa-phone"></i>
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
                                <input type="checkbox" />Agree to terms and conditions
                            </div>

                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact