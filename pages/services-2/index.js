import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceTwoModules = dynamic(() => import('@/modules/ServiceTwo'), {
  loading: () => <Preloader />,
});

export default function ServiceTwo() {
	return (
		<main>
			<HeaderFive />

			<ServiceTwoModules />

			<Footer />
		</main>
	)
}
