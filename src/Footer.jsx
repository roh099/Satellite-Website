import React from "react"
import logo from "../src/images/logo.png";
import { faFacebook,faTwitter,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { ArrowRight } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";





const Footer = () => {
    return (
        <>


            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            

                            <div className="col-lg-5 col-md-12 footer-info">
                                <NavLink to="/" className="logo d-flex align-items-center">
                                <img src={logo}   alt="logo" />
                                    <h2>Vyom voyage</h2>
                                </NavLink>
                                <p className="ft pe-5">Vyom Voyage is a brand new interdepartmental Student Association rooted in the Electronics & Telecommunications branch of Engineering with the aim to bring space enthusiasts from different departments of TCET and build a CubeSat to launch it into space.</p>
                                <div className="social-links mt-3">
                                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 pt-3 footer-links" >
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i> <ArrowRight color="royalblue" size={20} /> </i> <a href="#">Home</a></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <a href="#">About us</a></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <a href="#">Research</a></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <a href="#">Terms of service</a></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 pt-3 footer-links">
                                <h4>Domains</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Telecommunication</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Mechanical</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">G&C</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Software</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Electrical</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Instrumentation</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 pt-3 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    Thakur College of Engineering and Technology, Thakur Village, Kandivali(E), Mumbai 400101, India
                                </p>
                                <p>
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br></br>
                                    <strong>Email:</strong> info@example.com
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
                
                    <div className="copyright">
                        &copy; Copyright <strong><span>Vyom voyage</span></strong>. All Rights Reserved
                    </div>
                    
                


            </footer>



        </>
    );
};
export default Footer;