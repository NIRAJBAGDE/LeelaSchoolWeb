
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const LeaderShipsModules = dynamic(() => import('@/modules/LeaderShips'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderFive /> 

			<LeaderShipsModules />

			<Footer />
		</main>
	)
}
