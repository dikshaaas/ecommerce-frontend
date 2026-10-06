import "./Footer.css"
import callIcon from "../../assets/icons/Call.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import appStoreIcon from "../../assets/icons/app-store.svg";
import googlePlayIcon from "../../assets/icons/google-play.svg";
import blueCircleIcon from "../../assets/icons/bluecircle.svg";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-col footer-col-1">
                    <h2 className="footer-logo">MegaMart</h2>

                    <div className="footer-contact-info">
                        <h3 className="footer-subtitle">Contact Us</h3>
                        <div className="contact-item">
                            <span className="contact-icon">
                                <img src={whatsappIcon} alt="WhatsApp" />
                            </span>
                            <div className="contact-text">
                                <p>Whats App</p>
                                <p>+1 202-918-2132</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">
                                <img src={callIcon} alt="Call Us" />
                            </span>
                            <div className="contact-text">
                                <p>Call Us</p>
                                <p>+1 202-918-2132</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-download-app">
                        <h3 className="footer-subtitle">Download App</h3>
                        <div className="app-buttons">
                            <img src={appStoreIcon} alt="App Store" className="app-btn-img" />
                            <img src={googlePlayIcon} alt="Google Play" className="app-btn-img" />
                        </div>
                    </div>
                </div>

                <div className="footer-col footer-col-2">
                    <h3 className="footer-col-title">Most Popular Categories</h3>
                    <ul className="footer-list">
                        <li>Staples</li>
                        <li>Beverages</li>
                        <li>Personal Care</li>
                        <li>Home Care</li>
                        <li>Baby Care</li>
                        <li>Vegetables & Fruits</li>
                        <li>Snacks & Foods</li>
                        <li>Dairy & Bakery</li>
                    </ul>
                </div>

                <div className="footer-col footer-col-3">
                    <h3 className="footer-col-title">Customer Services</h3>
                    <ul className="footer-list">
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>E-waste Policy</li>
                        <li>Cancellation & Return Policy</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
            </div>

            <div className="footer-background-circles">
                <img src={blueCircleIcon} alt="" className="footer-circles-img" />
            </div>
        </footer>
    );
}

export default Footer;