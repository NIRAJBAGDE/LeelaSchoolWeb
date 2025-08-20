import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceThreeModules = dynamic(() => import('@/modules/ServiceThree'), {
  loading: () => <Preloader />,
});

export default function ServiceThree() {
	return (
		<main>
			<HeaderFive />

			<ServiceThreeModules />

			<Footer />
		</main>
	)
}
