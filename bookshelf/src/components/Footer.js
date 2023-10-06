import React from 'react'

import Envelop from "../cover/envelope-outline.svg"

const Footer = () => {
    return (

        <section className="footer">
            <div className="">
                <div className="top-footer padding-1 flex">
                    <div className="subscribe">
                        <div className="subscribe-head flex">
                            <img src={Envelop} alt="icon" width="50px" height="50px" />
                            <p style={{margin: "0"}}>Subscribe to get Updates of Book on email</p>
                        </div>
                        <div className="subscribe-inp flex">
                            <div className="inp-div"><input type="text" name="uname" className="form-inp" placeholder="Enter Your name" />
                            </div>
                            <div className="inp-div"><input type="email" name="email" className="form-inp" placeholder="Enter email" />
                            </div>
                            <div className="inp-btn"><input type="button" value=" Log in" className="primary-btn" /></div>

                        </div>
                    </div>

                    <div className="footer-img">
                        <img src="img/footer-img.png" alt="" />
                    </div>
                    <div></div>
                </div>

                <div className="bottom-footer padding-1 flex">
                    <div className="footer-col-1 flex">
                        <div>
                            <h2>BookShelf</h2>
                        </div>
                        <div>
                            <p style={{fontSize: "16px"}}>visit our offline store</p>
                        </div>
                        <div>
                            <h4><strong>Contact</strong></h4>
                        </div>
                        <div>
                            <p><strong>Address: </strong>hari om society, lathidad, botad</p>
                            <p><strong>Phone:</strong>+91 9875139782 /+91 0101010101</p>
                            <p><strong>Time:</strong>Mon-Sat (9:00AM - 10:00PM)</p>
                        </div>
                        <div>
                            <h4><strong>Follow Us</strong></h4>
                        </div>
                        <div>Icon</div>
                    </div>
                    <div className="footer-col-2 flex">
                        <div className="footer-col-2-1 flex">
                            <h4><strong>About</strong></h4>
                            <a href="">About Us</a>
                            <a href="">Delivery information</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms & Condition</a>
                            <a href="">Contact us</a>
                        </div>
                        <div className="footer-col-2-2 flex">
                            <h4><strong>My Account</strong></h4>
                            <a href="">Sign In</a>
                            <a href="">View Cart</a>
                            <a href="">My Whishlist</a>
                            <a href="">Track My Order</a>
                            <a href="">Help</a>
                        </div>
                    </div>
                    <div className="footer-col-3 flex">
                        <h4><strong>Install App</strong></h4>
                        <p>From App Store Or Google Play</p>
                        <div><button className="primary-btn">Google Play</button></div>
                        <p>Secured Payment</p>
                        <div>Image(upi,debit-card)</div>
                    </div>
                </div>
                <hr />
                <div className="copywrite padding-1">
                    <div>
                        <p className="p3-text"> Copyright ©2023. All Rights Reserved.</p>
                    </div>
                    <div>
                        <p className="p3-text"><a href="">Term & Condition</a></p>
                        <p className="p3-text"><a href="">Privacy-Policy</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
