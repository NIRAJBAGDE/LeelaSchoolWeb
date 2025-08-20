import SingleFeatureThree from '@/components/Feature/Three';
import Services from '@/data/services';

export default function Feature() {
  return (
    <div id="it-service" className="it-feature-area pt-30 pb-20">
      <div className="container">
        <h2 className="it-section-title-2 pb-10">
          Welcome to Leela’s International School!
        </h2>
        <p>
          Leela’s International School, one of the best educational institutions in the Kanhan/Kandri area, is dedicated to fostering a nurturing and inclusive learning environment where every student can thrive. Established in 2021, we take pride in our tradition of academic excellence, cultural diversity, and strong community engagement, shaping young minds for a brighter future.
        </p>

        <div className="row">
          {Services.map((service, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <SingleFeatureThree
              id={service.id} // 👈 Pass the ID
              Icon={service.icon}
              Title={service.title}
              Description={service.description}
              btnText={service.btnText}
              Slug={service.slug}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}