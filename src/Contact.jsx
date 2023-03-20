// import React from "react"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z1xw76g', 'template_ii3t2al', form.current, 'aHFpjlFHFtcI5-mM1')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };





  return (
    <>

      <section id="contact" className="contact">
        <div className="container pt-5 pb-5" data-aos="fade-up">
          <header className="section-header">
            <h2 className="d-flex justify-content-center">Contact Us</h2>
           
          </header>
          <div className="row gy-4 pt-5 d-flex align-items-top">
            <div className="col-lg-6">
              <div className="row gy-4 ">

                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>Thakur College of Engineering and Technology, Thakur Village, Kandivali(E), Mumbai 400101, India</p>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <div className="info-box " id="contact-number">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+91 83559 08284</p>
                    <p>+91 73046 63225</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>vyomvoyage@gmail.com</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <form ref={form} onSubmit={sendEmail} className="php-email-form">
                <div className="row gy-4">

                  <div className="col-md-6">
                    <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6 ">
                    <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" name="user_subject" className="form-control" placeholder="Subject" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    {/* <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div> */}

                    <button type="submit"  >Send Message</button>
                  </div>

                </div>
              </form>
            </div>









          </div>
        </div>
      </section>




    </>
  );
};
export default Contact;