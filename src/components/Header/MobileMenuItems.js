import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenuItems(props) {
  const { onePage } = props;

  const [home, setHome] = useState(false);
  const [aboutus, setAboutUs] = useState(false);
  const [admissions, setAdmissions] = useState(false);
  const [academics, setAcademics] = useState(false);
  const [mediagallery, setMediaGallery] = useState(false);  
  const openMobileMenu = (menu) => {
    if (menu === 'home') {
      setHome(!home);
      setAboutUs(false);
      setAdmissions(false);
    } else if (menu === 'aboutus') {
      setHome(false);
      setAboutUs(!aboutus);
      setAdmissions(false);
      setAcademics(false);
    } else if (menu === 'admissions') {
      setHome(false);
      setAboutUs(false);
      setAdmissions(!admissions);
      setAcademics(false);
    } else if (menu === 'academics') {
    setHome(false);
    setAboutUs(false);
    setAdmissions(false);
    setAcademics(!academics);
  } else if (menu === 'mediagallery') {
    setHome(false);
    setAboutUs(false);
    setAdmissions(false);
    setAcademics(false);
    setMediaGallery(!mediagallery);
  }
  
  };

  const onepageMobileMenuHome = (
    // className="has-dropdown p-static"
    <li>
      <Link
        href="/"
        className={home ? 'active' : ''}
        onClick={() => {
          openMobileMenu('home');
        }}
      >
        Home
        {/* <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
            fill="#0E2A46"
          ></path>
        </svg> */}
      </Link>
      {/* <ul className={home ? 'it-submenu submenu-open' : 'it-submenu'}>
        <li>
          <Link href="/">Home 1</Link>
        </li>
        <li>
          <Link href="/home-2">Home 2</Link>
        </li>
        <li>
          <Link href="/home-3">Home 3</Link>
        </li>
        <li>
          <Link href="/home-4">Home 4</Link>
        </li>
        <li>
          <Link href="/home-5">Home 5</Link>
        </li>
      </ul> */}
    </li>
  );

  return (
    <>
      {onePage == 'onepage1' ? (
        <ul>
          {onepageMobileMenuHome}
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-team">Team</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
          <li>
            <Link href="#it-newsletter">Contact</Link>
          </li>
        </ul>
      ) : onePage == 'onepage2' ? (
        <ul>
          {onepageMobileMenuHome}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-contact">Contact</Link>
          </li>
          <li>
            <Link href="#it-event">Event</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == 'onepage3' ? (
        <ul>
          {onepageMobileMenuHome}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-service">Services</Link>
          </li>
          <li>
            <Link href="#it-team">Team</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == 'onepage4' ? (
        <ul>
          {onepageMobileMenuHome}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="#it-event">Event</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == 'onepage5' ? (
        <ul>
          {onepageMobileMenuHome}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="#it-contact">Contact</Link>
          </li>
          <li>
            <Link href="#it-gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : (
        <ul>
          {/* className="has-dropdown p-static" */}
          <li >
            <Link
              href="/"
              className={home ? 'active' : ''}
              onClick={() => {
                openMobileMenu('home');
              }}
            >
              Home
              {/* <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg> */}
            </Link>
            {/* <ul className={home ? 'it-submenu submenu-open' : 'it-submenu'}>
              <li>
                <Link href="/">Home 1</Link>
              </li>
              <li>
                <Link href="/home1-onepage">Home 1 Onepage</Link>
              </li>
              <li>
                <Link href="/home-2">Home 2</Link>
              </li>
              <li>
                <Link href="/home2-onepage">Home 2 Onepage</Link>
              </li>
              <li>
                <Link href="/home-3">Home 3</Link>
              </li>
              <li>
                <Link href="/home3-onepage">Home 3 Onepage</Link>
              </li>
              <li>
                <Link href="/home-4">Home 4</Link>
              </li>
              <li>
                <Link href="/home4-onepage">Home 4 Onepage</Link>
              </li>
              <li>
                <Link href="/home-5">Home 5</Link>
              </li>
              <li>
                <Link href="/home5-onepage">Home 5 Onepage</Link>
              </li>
            </ul> */}
          </li>


          {/* <li>
            <Link href="/about-us">about us</Link>
          </li> */}

          <li className="has-dropdown">
            <Link
              href="#"
              className={aboutus ? 'active' : ''}
              onClick={() => {
                openMobileMenu('aboutus');
              }}
            >
              about us
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={aboutus ? 'it-submenu submenu-open' : 'it-submenu'}>
            <li>
                <Link href="/about-us">About school</Link>
              </li>
              <li>
                <Link href="/values-mission">Mission & Vision</Link>
              </li>
              <li>
                <Link href="/whyus">Why Us</Link>
              </li>
              <li>
                <Link href="/chairmansmessage">Director's Message</Link>
              </li>
              <li>
                <Link href="/leaderships">Leadership</Link>
              </li>
              <li>
                <Link href="/educators">Educators</Link>
              </li>
              {/* <li>
                <Link href="/infrastructure">Infrastructure</Link>
              </li>
              <li>
                <Link href="/Mandatorydisclosure">Mandatory Disclosure</Link>
              </li> */}
            </ul>
          </li>


          <li className="has-dropdown">
            <Link
              href="#"
              className={admissions ? 'active' : ''}
              onClick={() => {
                openMobileMenu('admissions');
              }}
            >
              admissions
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={admissions ? 'it-submenu submenu-open' : 'it-submenu'}>
            <li>
                <Link href="/admissionproc">Admission Procedure</Link>
              </li>
                          {/* <li>
                <Link href="/mandatorydisclosure">Mandatory Disclosure</Link>
              </li> */}
              {/* <li>
                <Link href="/feesstructure">Fees Structure</Link>
              </li> */}
              {/* <li>
                <Link href="/enquiryform/studentenquiryform">Enquiry Form</Link>
              </li> */}
            </ul>
          </li>         

          <li className="has-dropdown">
            <Link
              href="#"
              className={academics ? 'active' : ''}
              onClick={() => {
                openMobileMenu('academics');
              }}
            >
              academics
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={academics ? 'it-submenu submenu-open' : 'it-submenu'}>
            <li>
                <Link href="/academics">Academics</Link>
              </li>
              <li>
                <Link href="/activities">Co-Curricular Activities</Link>
              </li>
              {/* <li>
                <Link href="/exammodule">Examination Module</Link>
              </li> */}
              {/* <li>
                <Link href="/booklist">Book List</Link>
              </li>  */}
            </ul>
          </li>   
          
          <li className="has-dropdown">
            <Link
              href="#"
              className={mediagallery ? 'active' : ''}
              onClick={() => {
                openMobileMenu('mediagallery');
              }}
            >
              media gallery
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={mediagallery ? 'it-submenu submenu-open' : 'it-submenu'}>
            <li>
                <Link href="/photos">Photos</Link>
              </li>
              <li>
                <Link href="/videos">Videos</Link>
              </li>
            </ul>
          </li>   
            <li>
            <Link href="/Jobs">Jobs</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}
