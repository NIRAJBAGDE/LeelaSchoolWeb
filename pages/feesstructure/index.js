
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const FeesStructureModules = dynamic(() => import('@/modules/FeesStructure'), {
  loading: () => <Preloader />,
});

export default function Price() {
	return (
		<main>
			<HeaderFive />

			<FeesStructureModules />

			<Footer />
		</main>
	)
}
