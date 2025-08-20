import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceModules = dynamic(() => import('@/modules/Service'), {
  loading: () => <Preloader />,
});

export default function Service() {
	return (
		<main>
			<HeaderFive />

			<ServiceModules />

			<Footer />
		</main>
	)
}
