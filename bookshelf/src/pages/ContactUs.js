import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
    <NavBar/>
    
    <section className="contact-us">

        <div className="">
            <div className="contact-img flex">
                <div className="contact-heading">
                    Stay connected with Us
                </div>
                <div className="contact-form flex">
                    <form action="" className="c-form">
                        <div>
                            <div><label for="c-name">First Name</label></div>
                            <input type="text" name="" id="c-name"/>
                        </div>
                        <div>
                            <div><label for="c-l-name">Last Name</label></div>
                            <input type="text" name="" id="c-l-name"/>
                        </div>
                        <div>
                            <div><label for="email">Email Adress</label></div>
                            <input type="c-email" name="" id="c-email"/>
                        </div>
                        <div>
                            <div>
                                <label for="c-massage">Message /feedback</label>
                            </div>
                            <textarea name="" id="c-textarea" cols="35" rows="5"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="send"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="contact-details">
            <div className="container">
                <div className="contact-card">
                    <div className="c-icon">
                        <img src="img/location.png" alt=""/>
                    </div>
                    <div className="c-heading">visit Us</div>
                    <p className="p3-text">
                        Lorem ipsum dolor sit amet, consectetur at obcaecati consectetur eveniet.
                    </p>
                    <div style={{color:"#2bb187"}}>Botad,Gujarat,India</div>
                </div>
                <div className="contact-card">
                    <div className="c-icon">
                        <img src="img/call1.png" alt=""/>
                    </div>
                    <div className="c-heading">Call Us</div>
                    <p className="p3-text">
                        Lorem ipsum dolor sit amet, consectetur at obcaecati consectetur eveniet.
                    </p>
                    <div style={{color:"#2bb187"}}>+91 00000 00000</div>
                </div>
                <div className="contact-card">
                    <div className="c-icon">
                        <img src="img/envelope-outline.svg" alt=""/>
                    </div>
                    <div className="c-heading">Email Us</div>
                    <p className="p3-text">
                        Lorem ipsum dolor sit amet, consectetur at obcaecati consectetur eveniet.
                    </p>
                    <div style={{color:"#2bb187"}}>bookshelf@bookstore.com</div>
                </div>
            </div>
        </div>

        <div className="container c-map">
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27706.393089105117!2d71.75645415991366!3d22.108118607843107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958cf867b1de48b%3A0x5fac28f978984dfe!2sLathidad%2C%20Gujarat%20364710!5e0!3m2!1sen!2sin!4v1677747083560!5m2!1sen!2sin"
                   style={{margin : 0}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="c-footer">
            <div className="container">
                <div>Support us</div>
                <div className="f-icon-div">
                    <div className="footer-icon">
                        <img src="img/social1.png" alt="icon"/>
                    </div>
                    <div className="footer-icon">
                        <img src="img/social2.png" alt="icon"/>
                    </div>
                    <div className="footer-icon">
                        <img src="img/social3.png" alt="icon"/>
                    </div>
                    <div className="footer-icon">
                        <img src="img/social 4.png" alt="icon"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default ContactUs
