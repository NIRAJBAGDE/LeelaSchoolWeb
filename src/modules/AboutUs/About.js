import Image from 'next/image';

export default function About() {
  return (
    <div className="it-about-4-area inner-about-style pt-10 pb-05">
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
                about us
              </span>
            
<h2 class="it-section-title-3 pb-30">Welcome to Leela&rsquo;s International School!</h2>
<p>At Leela&rsquo;s International School we are committed to providing a nurturing and inclusive learning environment where every student can thrive. Established in 2021, our school has a proud tradition of academic excellence, cultural diversity, and community involvement.</p>
<br></br>
<p><strong>Our History:&nbsp;</strong>Leeela&rsquo;s School, Kandri, Kanhan began its journey in June 2021 with classes from Nursery to KG II, It is an English medium CBSE co-educational school run by the Sandesh Shikshan Prasarak Mandal, Nagpur, a non-profit making society registered under the Society's Registration Act of 1860. The members of the society are renowned Educationists, Jurists, Engineers and Administrators. The school has excelled in providing a holistic education to its students. LIS is having a national curriculum in an environment that fosters excellence in school life amidst wide open spaces. It also promotes children's natural learning ability by developing cognitive and thinking skills. Apart from academics, LIS ensures that students are provided with opportunities to hone their co-curricular inclinations through sports, performing and visual arts, oratory, and other creative pursuits.</p>
             
               </div>

            <div className="it-about-3-btn-box p-relative">
              <a className="it-btn" href="admissionproc">
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
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
