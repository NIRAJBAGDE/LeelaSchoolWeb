
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const MandatoryDisclosureModules = dynamic(() => import('@/modules/MandatoryDisclosure'), {
  loading: () => <Preloader />,
});

export default function Event() {
	return (
		<main>
			<HeaderFive />

			<MandatoryDisclosureModules />

			<Footer />
		</main>
	)
}
