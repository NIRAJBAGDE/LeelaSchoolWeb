import SingleTeamTwo from '@/components/Educators/SingleEducatorsTwo';
import Teachers from '@/data/teachers';

export default function EducatorsArea() {
  return (
    <div className="it-team-3-area it-team-3-style-2  it-team-3-style-3 pt-20 pb-10">
      <div className="container">
        <p>
        Well-experienced educators are the most valuable resource a community can provide to its young people. Beyond family support, a good educator is the most significant determinant of a child's success in school—more important than class size or school facilities. One of the key drivers of success at <strong>Leela’s School</strong> is the dedication and expertise of its faculty. The faculty at <strong>Leela’s School</strong> comprises a community of well-trained professionals with diverse backgrounds. What they all share is a passion for teaching and inspiring children to embrace learning.
        </p>
        <div className="row">
          {Teachers.map((teacher) => {
            return (
              <div
                key={teacher.id}
                className="col-xl-3 col-lg-4 col-md-6 mb-30"
              >
                <SingleTeamTwo
                  Slug={teacher.slug}
                  Title={teacher.title}
                  Img={teacher.image}
                  Teacher={teacher.name}
                  Designation={teacher.designation}
                />
              </div>
            );
          }).slice(0, 20)}
        </div>
      </div>
    </div>
  );
}
