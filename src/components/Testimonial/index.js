export default function SingleTestimonial(props) {
  const { testiClass, authorName,authorImg, designation, description,rating } = props;
  return (
    <div className={testiClass ? testiClass : 'it-testimonial-slide-item'}>
      <div className="it-testimonial-slide-info">
        <h4 className="it-testimonial-user-name">
          {authorName ? authorName : 'Niraj Bagde'}
        </h4>
        <span>{designation ? designation : 'Student'}</span>
        <p>
          {description
            ? description
            : 'My school is best and love going to school everyday.'}
        </p>
      </div>
    </div>
  );
}
