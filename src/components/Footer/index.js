import Image from 'next/image';
import Link from 'next/link';

export default function Footer(props) {
  const { footerLogo, footerClass } = props;
  const footerStyle = { backgroundImage: `url('/img/footer/bg-1-1.jpg')` };
  return (
    <footer>
      <div
        className="it-footer-area it-footer-bg black-bg relative pt-50 pb-0"
        style={footerStyle}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-4 col-md-6 col-sm-6 mb-00">
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-05">
                  <Link href="/">
                    <Image
                      src={`/img/logo/${
                        footerLogo ? footerLogo : 'logo-whites.png'
                      }`}
                      alt=""
                      width={161}
                      height={60}
                    />
                  </Link>
                </div>
                <div className="it-footer-text pb-0">
                  <p>  Leela's International School is one of the leading CBSE School in Kandri/Kanhan.<br /></p>
                  <p><strong>Email Address</strong> : <a href="mailto:admin@leelaschool.com">admin@leelaschool.com</a></p>                
                  <p><strong>Telephone No</strong> : <a href="tel:07102-299322">07102-299322</a></p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-0">
                <div className="it-footer-social">
                  <a href="https://www.facebook.com/people/Leelas-International-school/100083057424645/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a  href="https://www.instagram.com/leelasschool/" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a  href="https://www.youtube.com/@LeelasEducationGroup" target="_blank">
                            <i className="fab fa-youtube"></i>
                          </a>
                </div>
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-2">
                <h4 className="it-footer-title">our services:</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Web
                        development
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>UI/UX
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Management
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Digital
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Blog News
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-3">
                <h4 className="it-footer-title">quick links:</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>templates
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>blog and
                        article
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        integrations
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>webinars
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>privacy &
                        policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-4">
                <h4 className="it-footer-title">Gallery</h4>
                <div className="it-footer-gallery-box">
                  <div className="row gx-0">
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb mb-10">
                        <Image
                          src="/img/footer/thumb-1-1.png"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb mb-10">
                        <Image
                          src="/img/footer/thumb-1-2.png"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-4 mb-10">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/thumb-1-3.png"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/thumb-1-4.png"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/thumb-1-5.png"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/thumb-1-6.png"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-copyright-text text-center">
                <p>
                  Copyright © 2025 <a href="#">Leela's Group Of School </a> || All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
