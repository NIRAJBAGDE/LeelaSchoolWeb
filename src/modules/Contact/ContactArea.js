import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import axios from 'axios';
import dynamic from "next/dynamic"; 

export default function ContactArea() {
    const [successMessage, setSuccessMessage] = useState(""); // State for response message
  const form = useRef();
  const user_name = useRef()
  const user_email = useRef()
  const user_phone = useRef()
  const user_subject = useRef()
  const user_message = useRef()
  const Map = dynamic(() => import("src/components/GoogleMaps/Maps"), { ssr: false });

   const onSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear previous message

    const contactMessage = {
      Name: user_name.current.value,
      EmailAddress: user_email.current.value,
      Phone: user_phone.current.value,
      Subject: user_subject.current.value,
      Message: user_message.current.value,
    };


  debugger
  axios.post("https://webapi.leelasschool.com/SchoolAPI/send-contact-query", contactMessage)
    .then(() => {
      setSuccessMessage("We have received your message. Thank you!");
      
      // Clear all input fields after success
      user_name.current.value = "";
      user_email.current.value = "";
      user_phone.current.value = "";
      user_subject.current.value = "";
      user_message.current.value = "";
    })
    .catch(() => setSuccessMessage("There was an error sending your message. Please try again."));
};


  return (    
    <div className="it-contact__area pt-10 pb-120">
      <div className="container">
            <Map />
        <div className="it-contact__wrap fix z-index-3 p-relative">
          <div className="it-contact__shape-1 d-none d-xl-block">
            <Image
              src="/img/contact/shape-2-1.png"
              alt=""
              width={340}
              height={340}
              style={{ height: 'auto' }}
            />
          </div>
          <div className="row align-items-end">
            <div className="col-xl-7">
              <div className="it-contact__right-box">
                <div className="it-contact__section-box pb-20">
                  <h4 className="it-contact__title pb-15">Get in Touch</h4>

                   

                  <p style={{ fontFamily: 'Times New Roman', fontSize:25}} >
                    Leela's International School <br />
                    Kandri, Nagpur{' '}
                  </p>
                </div>
                <div className="it-contact__content mb-55">
                  <ul>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Our Address</span>
                          <a href="#">
                           Survey no 54. Opposite Jawaharlal Nehru hospital, Near borda railway crossing, <br />
                           Kandri Kanhan                            
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-clock"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Hours of Operation</span>
                          <a href="#">Mon - Fri: 9.00am to 4.00pm</a>
                          <span>[<a href="#">Sat: 9.00am to 12.30pm</a>]</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-phone phone"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>contact</span>
                          <a href="tel:+99358954565">07102-299322</a>
                          <a href="tel:+99358954565">7028357571</a>
                          <a href="mailto:admin@leelaschool.com">
                          admin@leelaschool.com
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
                  <div className="it-contact__scrool smooth">
                    <a href="#it-newsletter">
                      <i className="fa-solid fa-arrow-down"></i>Customer Care
                    </a>
                  </div>
                  <div className="it-footer-social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    {/* <a href="#">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a> */}
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="it-contact__form-box">
                <form  onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Name*</label>
                        <input
                          type="text"
                          placeholder="Name"
                          name="user_name"
                          ref={user_name}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          placeholder="Email"
                          name="user_email"
                          ref={user_email}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Phone*</label>
                        <input
                          type="text"
                          placeholder="Phone"
                          name="user_phone"
                          ref={user_phone}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Subject*</label>
                        <input
                          type="text"
                          placeholder="Subject"
                          name="user_subject"
                          ref={user_subject}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-textarea-box">
                        <label>Message</label>
                        <textarea
                          placeholder="Message"
                          name="user_message"
                          ref={user_message}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="it-btn">
                  <span>
                    Send Message
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1.24023L16 7.24023L11 13.2402"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 7.24023H16"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                </form>
                {successMessage && <p style={{ color: "green", fontWeight: "bold" }}>{successMessage}</p>} 
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
