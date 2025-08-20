
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ChairmansMessageModules = dynamic(() => import('@/modules/ChairmansMessage'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderFive /> 

			<ChairmansMessageModules />

			<Footer />
		</main>
	)
}
