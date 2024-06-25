import React from "react";
import './index.css'

const Footer = () => {

    return (
        <>
            <div className="footernav">
                <div><span className="span">Get a 5% discount on your first purchase</span></div>
                <div>
                    <input type="email" placeholder="Your E-mail" />
                    <button>send</button>
                </div>
            </div>

            <div className="navlinks">
                <div>
                    <h2>Company</h2>
                    <li>About BrickHouse</li>
                    <li>Our shop</li>
                    <li>Bonus Program</li>
                    <li>Our patners</li>
                    <li>News</li>
                </div>
                <div>
                    <h2>Help</h2>
                    <li>Shipping and pay</li>
                    <li>Return and exchange</li>
                    <li>Reviews</li>
                    <li>Feedback</li>
                    <li>FAQ</li>
                </div>
                <div>
                    <div>
                        <h2>Contacts</h2>
                        <span>0(800)11-22-33 <br />info.bhouse@gmail.com <br /></span>
                    </div>
                    <div>
                        <h2>We work:</h2>
                        <span>Mon-Fri:09:00-20:00</span>
                        <br />
                        <span>Sat-Sun:10:00-20:00</span>
                    </div>


                </div>
                <div>
                <h2>Social Networks</h2>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-youtube"></i>


                <h2>You can pay</h2>
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-brands fa-google-pay"></i>
                <i class="fa-brands fa-apple-pay"></i>
                <div />

                </div>

               
            </div>
            <div className="policy">
                <span>BrickHouse</span>
                <span>privacy policy</span>
                <span>Cookies</span>
                <span>Copy Right</span>
               </div>
        </>
    )
}
export default Footer;