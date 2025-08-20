import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic';
 
const TestimonialModules = dynamic(() => import('@/modules/Testimonial'), {
  loading: () => <Preloader />,
});

export default function Testimonial() {
	return (
		<main>
			<HeaderFive />

			<TestimonialModules />

			<Footer />
		</main>
	)
}
