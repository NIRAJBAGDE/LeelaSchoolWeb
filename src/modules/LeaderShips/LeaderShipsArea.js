import Image from 'next/image';
import Link from 'next/link';
import SingleProgress from '@/components/Progress';

const progresses = [
  { id: 1, progressLabel: 'Lectures', progress: '90' },
  { id: 2, progressLabel: 'My Skills', progress: '82' },
  { id: 3, progressLabel: 'Consulting', progress: '75' },
];

export default function LeaderShips() {
  // if (!item) {
  //   return <div>Loading...</div>;
  // }
  // const { image, name, designation, bio, email, phone, address } = item;

  return (
    <div className="it-teacher-details-area pb-120">
      <div className="container">
        <div className="it-teacher-details-wrap">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="it-teacher-details-left">
                <div className="it-teacher-details-left-thumb">
                  <Image
                    src="/img/breadcrumb/leadership_C.jpg"
                    alt=""
                    width={284}
                    height={284}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-teacher-details-left-social text-center">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-skype"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <div className="it-teacher-details-left-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-phone-volume"></i>
                      <a href={`tel:'(568) 367-987-237'`}>
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                      <a href="https://www.google.com/maps" target="_blank">
                        {'Leela’s International, Kandri'}
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-envelope"></i>
                      <a
                        href={`mailto:${'Sandesh.rangari@leelasschool.com'}`}
                      >
                        {'Sandesh.rangari@leelasschool.com '}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="it-teacher-details-left-btn">
                  <Link className="it-btn" href="/contact">
                    <span>
                      Contact us teacher
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
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="it-teacher-details-right">
                <div className="it-teacher-details-right-title-box">
                  <h4>{'Mr. Sandesh Rangari'}</h4>
                  <span>{'DIRECTOR-LEELA’S GROUP OF EDUCATION'}</span>
                  {/* <p>
                    {'Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa'}
                  </p> */}
                  <p>
                  Sandesh Rangari, son of the esteemed Mrs. Leela Rangari, continues her legacy of dedication to education. With a deep commitment to furthering her dream of providing the best possible education, Sandesh is the visionary behind Leela's Kindergarten and to the Leela’s International School. As a strategist and planner, he has long fostered plans for an ideal school that embodies excellence and innovation. 
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  He envisions Leela's Kindergarten as a venture of hope and a promise to the future. His ambitious plans for the organization reflect his unwavering dedication to creating an exceptional learning environment. He stands as the driving force behind the establishment of Leela's Kindergarten & Leela’s International School, ensuring that his mother's legacy of hard work, passion, and dedication lives on.
<br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="it-teacher-details-wrap">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="it-teacher-details-left">
                <div className="it-teacher-details-left-thumb">
                  <Image
                    src="/img/breadcrumb/leadership_A.jpg"
                    alt=""
                    width={284}
                    height={284}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-teacher-details-left-social text-center">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-skype"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <div className="it-teacher-details-left-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-phone-volume"></i>
                      <a href={`tel:'(568) 367-987-237'`}>
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                      <a href="https://www.google.com/maps" target="_blank">
                        {'Leela’s International, Kandri'}
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-envelope"></i>
                      <a
                        href={`mailto:${'Dipak.Dumale@leelasschool.com'}`}
                      >
                        {' Dipak.Dumale@leelasschool.com '}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="it-teacher-details-left-btn">
                  <Link className="it-btn" href="/contact">
                    <span>
                      Contact us teacher
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
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="it-teacher-details-right">
                <div className="it-teacher-details-right-title-box">
                  <h4>{'Mr. Dipak R. Dumale'}</h4>
                  <span>{'Advisor & CEO'}</span>
                  {/* <p>
                    {'Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa'}
                  </p> */}
                  <p>
                  Mr. Dipak R. Dumale is a profound and illustrious educationist with over 19 years of experience across in teaching, administration, mentoring and advisory roles with Bhartiya Vidya Bhavan, Podar International School, Delhi Public School, DVM Asim Saraf Central Academy, Sandipani, Jain International School.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Dedicated and experienced School Advisor with a passion for guiding schools towards academic success and students’ growth. Proven track record of providing comprehensive counseling, mentoring, and support services to help students navigate the challenges of their educational journey. Adept at creating and implementing individualized academic and career development plans, fostering a positive and inclusive learning environment, and collaborating with students, parents, and faculty to achieve positive outcomes. Strong communication and interpersonal skills, with a commitment to promoting student well-being and enhancing their educational experience. Seeking to leverage his expertise and commitment to educational excellence to contribute to a dynamic school community.
<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  He has left an indelible mark through his leadership in cultural programs, and equestrian events.
Recipient of the Best School Management & Administrative Services & Eminent School Leader in India by International Education Symposium and Awards 2020.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  He holds an MA in English literature, a PG Diploma in HRD. MIRPM, Diploma in Mass communication and journalism
At Leela’s International School, his commitment to celebrating each child's uniqueness creates an environment where all student's talents shine brightly.
<br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="it-teacher-details-wrap">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="it-teacher-details-left">
                <div className="it-teacher-details-left-thumb">
                  <Image
                    src="/img/breadcrumb/Mrs Swati Gupta Principal.JPG"
                    alt=""
                    width={284}
                    height={284}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-teacher-details-left-social text-center">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-skype"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <div className="it-teacher-details-left-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-phone-volume"></i>
                      <a href={`tel:'(568) 367-987-237'`}>
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                      <a href="https://www.google.com/maps" target="_blank">
                        {'Leela’s International, Kandri'}
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-envelope"></i>
                      <a
                        href={`mailto:${'swati.gupta@leelasschool.com'}`}
                      >
                        {' swati.gupta@leelasschool.com '}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="it-teacher-details-left-btn">
                  <Link className="it-btn" href="/contact">
                    <span>
                      Contact us teacher
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
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="it-teacher-details-right">
                <div className="it-teacher-details-right-title-box">
                  <h4>{'Mrs. Swati Gupta '}</h4>
                  <span>{'Principal'}</span>
                  {/* <p>
                    {'Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa'}
                  </p> */}
                  <p>
                  As the Principal, Mrs. Swati Gupta lead a dedicated team of educators who strive to 
                  create a nurturing 
                  and intellectually stimulating environment for our students.
                  <br></br>
                  Under her leadership, our school continues to uphold its mission of fostering 
                  creativity, integrity, and knowledge. With a vision that blends tradition with 
                  innovation, she ensures that students are not only prepared for academic 
                  success but also equipped with life skills that guide them into the future.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className="container">
        <div className="it-teacher-details-wrap">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="it-teacher-details-left">
                <div className="it-teacher-details-left-thumb">
                  <Image
                    src="/img/breadcrumb/Mrs. Heena Gedam HM Leelas Kids.JPG"
                    alt=""
                    width={284}
                    height={284}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-teacher-details-left-social text-center">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-skype"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <div className="it-teacher-details-left-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-phone-volume"></i>
                      <a href={`tel:'(568) 367-987-237'`}>
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                      <a href="https://www.google.com/maps" target="_blank">
                        {'Leela’s International, Kandri'}
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-envelope"></i>
                      <a
                        href={`mailto:${'heena.gedam@leelasschool.com'}`}
                      >
                        {' heena.gedam@leelasschool.com '}
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="it-teacher-details-right">
                <div className="it-teacher-details-right-title-box">
                  <h4>{'Mrs. Heena Gedam '}</h4>
                  <span>{'Head Mistress'}</span>                 
                  <p>
                  At Leela's Kids, leadership and vision come together in the guidance of our
                   esteemed Headmistress, Mrs. Heena Gedam.
                  <br></br>
                  Driven by passion and dedication, She works tirelessly to 
                  uphold the school's mission, cultivating an atmosphere that empowers both 
                  students and teachers to strive for greatness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div> 
  );
}
