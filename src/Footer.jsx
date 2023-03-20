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
                                    <a href="https://www.linkedin.com/company/83058678/admin/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://twitter.com/VyomVoyage?s=20&t=ksyf1amR4YbB0atPE5-rWg"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100090174761968&is_tour_completed=true"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="https://www.instagram.com/vyomvoyage/"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 pt-3 footer-links" >
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i> <ArrowRight color="royalblue" size={20} /> </i> <NavLink to="/">Home</NavLink></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <NavLink to="/research">Research</NavLink></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <NavLink to="/domain">Domains</NavLink></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <NavLink to="/about">About Us</NavLink></li>
                                    <li><i> <ArrowRight color="royalblue" size={20} /></i> <NavLink to="/contact">Contact Us</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 pt-3 footer-links">
                                <h4>Domains</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <NavLink to="/Domain">Telecommunication</NavLink></li>
                                    <li><i className="bi bi-chevron-right"></i> <NavLink to="/Domain">Mechanical</NavLink></li>
                                    <li><i className="bi bi-chevron-right"></i> <NavLink to="/Domain">G&C</NavLink></li>
                                    <li><i className="bi bi-chevron-right"></i> <NavLink to="/Domain">Software</NavLink></li>
                                    <li><i className="bi bi-chevron-right"></i> <NavLink to="/Domain">Electrical</NavLink></li>
                                    <li><i className="bi bi-chevron-right"></i> <NavLink to="/Domain">Instrumentation</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 pt-3 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    Thakur College of Engineering and Technology, Thakur Village, Kandivali(E), Mumbai 400101, India
                                </p>
                                <p>
                                    <strong>Phone:</strong> +91 8355908284
                                    <br></br>
                                    <strong>Email:</strong> Vyomvoyage@gmail.com
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