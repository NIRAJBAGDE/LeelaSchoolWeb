import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AcademicsModules = dynamic(() => import('@/modules/Academics'), {
  loading: () => <Preloader />,
});

export default function Academics() {
	return (
		<main>
			<HeaderFive />
			<AcademicsModules />
			<Footer />
		</main>
	)
}
