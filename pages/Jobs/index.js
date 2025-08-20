import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const JobsModules = dynamic(() => import('@/modules/Jobs'), {
  loading: () => <Preloader />,
});

export default function Jobs() {
	return (
		<main>
			<HeaderFive />

			<JobsModules />

			<Footer />
		</main>
	)
}
