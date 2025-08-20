import Image from 'next/image';

export default function WhyUs() {
  return (
    <div className="it-about-4-area inner-about-style pt-10 pb-120">
      <div className="container">
        <div className="row align-items-center">
          
          
          <div className="col-xl-12 col-lg-12">
            <div className="it-teacher-details-wrap">
              <span className="it-section-subtitle">
                <Image
                  src="/img/category/inner.svg"
                  alt=""
                  width={18}
                  height={18}
                />{' '}
                why us
              </span>
            
              <p><strong>Why Choose Us?</strong></p>
<ul>
<li><strong>Experienced and Caring Staff:</strong> Our teachers are passionate about education and committed to the success of every student.</li>
<li><strong>Innovative Curriculum:</strong> We offer a balanced curriculum that includes academic rigor, creativity, and hands-on learning experiences.</li>
<li><strong>Diverse Extracurricular Activities:</strong> From sports to arts to clubs, there is something for every student to explore and enjoy.</li>
<li><strong>Strong Community Ties:</strong> We foster a sense of belonging and partnership with parents and the local community.</li>
</ul>
<p><strong>Join Us:</strong> Discover the difference of a Leela&rsquo;s Internal Schools education. We invite you to learn more about our programs, visit our campus, and become part of our vibrant school community.</p>
<p>&nbsp;</p>

               </div>

            {/* <div className="it-about-3-mv-box">
              <div className="row">
                <div className="col-xl-12">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <i className="flaticon-video-1"></i>
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Sharing a Screen
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <i className="flaticon-puzzle"></i>
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        presenter Control
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="it-about-3-btn-box p-relative">
              <a className="it-btn" href="contact">
                <span>
                  admission open
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
              </a>
              <div className="it-about-3-left-shape-3 d-none d-xl-block">
                <Image
                  src="/img/about/about-3-shap-3.png"
                  alt=""
                  width={266}
                  height={52}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
