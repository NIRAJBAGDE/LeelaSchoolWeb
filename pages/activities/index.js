
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ActivitiesModules = dynamic(() => import('@/modules/Activities'), {
  loading: () => <Preloader />,
});

export default function Activities() {
	return (
		<main>
			<HeaderFive /> 

			<ActivitiesModules />

			<Footer />
		</main>
	)
}
