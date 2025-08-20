
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AboutSchoolModule = dynamic(() => import('@/modules/AboutSchool'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderFive />

			<AboutSchoolModule />

			<Footer />
		</main>
	)
}
