
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseTwoModules = dynamic(() => import('@/modules/CourseTwo'), {
  loading: () => <Preloader />,
});

export default function Course() {
	return (
		<main>
			<HeaderFive />

			<CourseTwoModules />

			<Footer />
		</main>
	)
}
