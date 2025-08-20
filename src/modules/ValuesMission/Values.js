import Image from 'next/image';

export default function Valuesmission() {
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
                mission & vision
              </span>
            
{/* <h2 class="it-section-title-3 pb-30">Welcome to Leela&rsquo;s International School!</h2> */}
<p><strong>Our Vision:&nbsp;</strong>Lead, Care and Inspire…To bring out the best in each and every child.’Philosophy Statement: Each and every Despite will grow up to be a well-balanced personality with internal and external values carrying forward the vision of the school. They will learn to respect, accept and embrace the differences across varied cultures. They will develop their potential by believing in themselves as capable individuals. They will learn to create, to lead, to love and live life fully.</p>
<br></br>
<p><strong>Our Mission:</strong></p>
<ul>
<li>We believe that every child can be developed and improved.</li>
<li>We believe that every child can be guided towards success.</li>
<li>We believe that every child is a winner.</li>
<li>We believe that every child can be groomed to be a successful human being.</li>
</ul>

<br></br>
<p><strong><i>"School... a place in which all children grow, not just in size, not even in knowledge, but in curiosity, courage, confidence, independence, resourcefulness, resilience, patience, competence and understanding. – …………John Holt"</i></strong></p>
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
