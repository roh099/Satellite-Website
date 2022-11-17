import React from "react"
import Tilt from 'react-vanilla-tilt'
import { NavLink } from "react-router-dom";
import sample from "../src/images/sample.mp4";
// import sample from "../src/images/bg-img.jpg"
import img1 from "../src/images/97.jpg";
import img2 from "../src/images/98.jpg";
import img3 from "../src/images/100.jpg";
import cube from "../src/images/cube.png";

const Home = () => {
    return (
        <>

            <section className="home">
                <div className="container pt-5 pb-5">
                    <div className="row  d-flex align-items-center">
                        <div className="col-sm-12 col-md-6 pe-5">
                            <h2> Sky is no longer limit for our pride </h2>
                            <div class="glassmorphic-card">
                                <div class="contentBox">
                                    <p>Vyom Voyage is an ideal stop for learners where students can learn numerous things surrounding satellite technology, covering every aspect of learning from technical to non-technical domains.</p>
                                    <NavLink href="#" className="bt "><span>Explore More</span></NavLink>
                                </div>
                            </div>
                        </div>

                        <div className=" col-sm-12 col-md-6">
                            <Tilt options={{ scale: 3 }} id="card">
                                <section class="container-03 d-flex justify-content-center pb-0 pt-0">
                                    <div class="glassmorphic-card">
                                        <div class="contentBox">
                                            <img src={cube} alt="" className="d-flex justify-content-center" />
                                            <h2 className="pt-2 d-flex justify-content-center">CUBESAT </h2>
                                        </div>
                                    </div>
                                </section>
                            </Tilt>
                        </div>

                    </div>

                </div>



            </section>

            <section className="home2">
                <div className="container pt-5 pb-5 video-container">
                    <div className="row pt-5 pb-5 d-flex justify-content-space-between">
                        <div className="col-sm-12 col-lg-8 col-md-8  vid d-flex justify-content-center">
                            <video id="video" width="550" height="400" muted loop autoPlay>
                                <source src={sample} type="video/mp4" />
                            </video>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-4 pt-">
                            <h2>WHAT IS CUBESAT?</h2>
                            <p>A CubeSat is a miniaturized spacecraft that orbits the earth.As the name suggests, CubeSat is shape like a cube of about 10 cm in length, breadth and depth. This is called one unit or 1U. It is very light weight, weighing not more than 1.33 kilograms.  Once in space, this can be used in a variety of applications.</p>
                        </div>
                    </div>
                </div>

            </section>





            {/* <section className="home3">

                <div class="slideshow-container">


                    <div class="mySlides ">

                        <img src={img1} alt="pic" />
                    </div>

                    <div class="mySlides ">
                        <img src={img2} alt="pic2" />
                    </div>

                    <div class="mySlides ">
                        <img src={img3} alt="pic3" />
                    </div>

                

                </div>

               

            </section > */}




        </>
    );
};
export default Home;