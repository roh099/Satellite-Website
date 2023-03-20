import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import about from "./images/about.png";
import logo from "../src/images/logo.png";
import prem from "../src/images/Prem.jpg";
import sud from "../src/images/sud.png";
import gaur from "../src/images/gaurav.jpg";
import mal from "../src/images/mal.jpeg";
import roh from "../src/images/roh.jpg";
import tus from "../src/images/tus.jpg";
import man from "../src/images/man.jpeg";
import vin from "../src/images/vin.jpg";
import kar from "../src/images/kar.jpg";
import up from "../src/images/up.jpg";
import Rohan from "../src/images/Rohan.jpg";
import nir from "../src/images/nir.jpeg";
import mansi from "../src/images/mansi.jpeg";
import par from "../src/images/par.jpeg";
import shub from "../src/images/shub.jpg";
import Adi from "../src/images/Adi.jpg";
import Har from "../src/images/Har.jpg";


const About = () => {
    return (
        <>

            <section id="about" className="about pt-5 pb-5">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2 className="d-flex justify-content-center">About US</h2>
                    </header>

                    <div className="row pt-2 gx-5">
                        <div className="col-lg-7  d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="content">
                                {/* <h2 className="d-flex justify-content-center">About Us</h2> */}
                                <p>
                                    “He who can listen to the music in the midst of noise, can achieve great things!”<strong> – Dr. Vikram Sarabhai (ISRO founder & pioneer Indian Physicist and Astronomer) </strong>
                                    <br />
                                    These words have always filled us with immense purpose, as budding space enthusiasts in the engineering field. Our great determination & unflinching perseverance to work for the betterment of space technology has led our organization to grow consistently from the vision of a single individual to a team of 17 creative & dynamic space enthusiasts.
                                </p>
                                <p>
                                    Currently, Vyom Voyage is a multi-disciplinary technical team, aiming to develop 1-U CubeSat for research and development purposes, and is ready to tackle any challenges that we may come across and solve them with utmost dedication and enthusiasm.
                                    <br />
                                    We, at Vyom Voyage, firmly believe in the ideology that bringing space technologies to civilians will enhance the productivity of their respective businesses and can help in the overall development of our country and the world. With these noble aims in mind, we hope to truly make our mark on the scientific & space community and inspire several other enthusiasts & professionals to work towards a higher goal of scientific progress for all of mankind.
                                </p>
                            </div>
                        </div>

                        <div className="ab-img   col-lg-5  d-flex" >
                            <img src={about} alt="" />
                        </div>

                    </div>
                </div>

            </section>




            <section id="team" className="team">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2>Meet the Team</h2>
                    </header>

                    <div className="row pb-5 gy-4 d-flex justify-content-center ">
                        <div className="col-lg-3 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200" id="lead">
                            <div className="member">
                                <div className="member-img">
                                    <img src={up} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Upkar Chaurasiya</h4>
                                    <span>Founder(Team Lead)</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-4">

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="member">
                                <div className="member-img">
                                    <img src={vin} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Vinayak Patil</h4>
                                    <span>Electrical</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="member">
                                <div className="member-img">
                                    <img src={roh} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Rohit Thakur</h4>
                                    <span>Software</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="member">
                                <div className="member-img">
                                    <img src={kar} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Karthikeyan Thevar</h4>
                                    <span>Mechanical</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={prem} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Prem Verma </h4>
                                    <span>Instrumentation</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={sud} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sudha Shukla</h4>
                                    <span>Embedded systems</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={mal} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Malcolm Cardoza</h4>
                                    <span>Telecommunication</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={tus} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Thushar Gupta </h4>
                                    <span>Instrumentation</span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={Adi} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Aditya Jaiswal</h4>
                                    <span>Editor</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={mansi} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Mansi Dongre </h4>
                                    <span>GN&C</span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={Rohan} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Rohan Yadav</h4>
                                    <span>Electrical </span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={par} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Prashant Pal</h4>
                                    <span>Software</span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={nir} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Niraj Mishra</h4>
                                    <span>Telecommunication</span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={gaur} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Gaurav Malik</h4>
                                    <span>Electrical</span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={shub} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Shubham Singh </h4>
                                    <span>Software</span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={Har} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Harsh Shigwan </h4>
                                    <span>GN&C</span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={man} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Manmohan Vishwakarma </h4>
                                    <span>Electrical</span>

                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <header className="section-header pt-4">
                        <h2>Faculties</h2>
                    </header> */}

                    {/* <div className="row gy-4 d-flex justify-content-center">

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={logo} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>------</h4>
                                    <span>******</span>

                                </div>
                            </div>
                        </div>


                       <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={logo} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>------</h4>
                                    <span>******</span>

                                </div>
                            </div>
                        </div>

                    </div> */}


                    {/* <header className="section-header pt-4">
                        <h2>Mentors</h2>
                    </header> */}

                    {/* <div className="row gy-4 d-flex justify-content-center">

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={logo} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>---------</h4>
                                    <span>******</span>

                                </div>
                            </div>
                        </div>


                       <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={logo} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>-------</h4>
                                    <span>******</span>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={logo} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>-------</h4>
                                    <span>******</span>

                                </div>
                            </div>
                        </div>







                    </div> */}




                </div>

            </section>



        </>
    );
};
export default About;