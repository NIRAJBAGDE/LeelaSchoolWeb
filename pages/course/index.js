
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseModules = dynamic(() => import('@/modules/Course'), {
  loading: () => <Preloader />,
});

export default function Course() {
	return (
		<main>
			<HeaderFive />

			<CourseModules />

			<Footer />
		</main>
	)
}
