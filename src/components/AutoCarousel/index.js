import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/src/assets/sass/glide.core.scss';
import '@glidejs/glide/src/assets/sass/glide.theme.scss';

export default function AutoCarousel() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(sliderRef.current, {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 3000,
    });

    glide.mount();
  }, []);

  return (
    <div className="glide" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide"><img style={{ height: "400px", width: "100%", objectFit: "cover" }} src="https://ik.imagekit.io/dyrhtb4f5/slider-1.jpg?updatedAt=1749121708799" alt="Slide 2" /> </li>
          <li className="glide__slide"><img style={{ height: "400px", width: "100%", objectFit: "cover" }} src="https://ik.imagekit.io/dyrhtb4f5/slider-4.jpg?updatedAt=1749121709868" alt="Slide 3" /> </li>
          <li className="glide__slide"><img style={{ height: "400px", width: "100%", objectFit: "cover" }} src="https://ik.imagekit.io/dyrhtb4f5/slider-3.jpg?updatedAt=1749121709945" alt="Slide 1" /> </li>
          <li className="glide__slide"> <img style={{ height: "400px", width: "100%", objectFit: "cover" }} src="https://ik.imagekit.io/dyrhtb4f5/slider-2.jpg?updatedAt=1749121708241" alt="Slide 3" /> </li>
        
        </ul>
      </div>
    </div>
  );
}