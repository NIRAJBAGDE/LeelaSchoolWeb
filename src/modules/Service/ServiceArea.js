import SingleCategory from '@/components/Service';
import Services from '@/data/services';

export default function ServiceArea() {
  return (
    <div className="it-feature-area pt-10 pb-10">
      <div className="container">
        <div className="row">
          <div className="it-feature-icon"><span><i className="flaticon-skill"></i></span></div>        
            <div className='it-feature-text pt-5'>
            <h4 className="it-feature-title">Skill Development</h4>
            <p>
              CBSE encourages the formation of skill development clubs and activities in schools to foster a culture of practical learning. 
              These clubs and activities provide students with opportunities to explore their interests and develop essential skills.
             </p>
              <p >
           <strong>   Robotics Clubs:</strong> Many CBSE schools have developed robotics clubs where students may learn about programming, engineering, and robotics via hands-on projects.
             </p>
             <p>
             <strong>    Debate & Public Speaking groups: </strong>These groups assist students in enhancing their communication and critical thinking abilities, which are essential for success in a variety of disciplines.
              </p>
              <p>
             <strong>    Art and Craft Clubs:</strong> Encouraging creativity and artistic skills among students.
              </p>
              <p>
             <strong>    Sports and Fitness Clubs:</strong> Promoting physical fitness and teamwork through sports and games.
              </p>
              <p>
             <strong>    Community Service Clubs:</strong> Encouraging social responsibility and leadership through community service activities.
              </p>
               <p>
These clubs and activities are not only enjoyable for students but also contribute significantly to their overall development.
          </p>
          </div>

          <div className="it-feature-icon"><span><i className="flaticon-study"></i></span></div>        
            <div className='it-feature-text pt-5'>
            <h4 className="it-feature-title">Active Learning</h4>
           <p> Active learning is a classroom approach that focuses on how the students learn, not just what they learn. This approach ensures they are actively engaged in learning and encourages more complex thought processes. Opportunities provided by you,
             their teachers, such as enquiry-led tasks and open-ended questions, challenge the students and supports them to build knowledge and their own understanding. This assists them to become responsible for their own learning and more motivated to achieve.
</p>
 <p>
<strong> What are the benefits?</strong></p> 
<p>
One of the biggest benefits of active learning is the it keeps the student engaged. They interact with a topic by working on activities that help reinforce knowledge, concept and skill.
Through memorable learning experiences, students move from short-term retention and achieve deeper levels of understanding. They develop skills such as critical thinking, collaborative working and problem solving that are important in school, university and future careers.
      </p>   
         </div>
          {/* {Services.map((service) => {
            return (
              <div
                key={service.id}
                className="col-xl-3 col-lg-3 col-md-6 mb-30"
              >
                <SingleCategory
                  Slug={service.slug}
                  Icon={service.icon}
                  Title={service.title}
                  courseCount={service.courseCount}
                />
              </div>
            );
          }).slice(0, 2)} */}
        </div>
      </div>
    </div>
  );
}
