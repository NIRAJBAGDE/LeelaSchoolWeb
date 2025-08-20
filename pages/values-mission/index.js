
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ValuesMissionModules = dynamic(() => import('@/modules/ValuesMission'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderFive /> 

			<ValuesMissionModules />

			<Footer />
		</main>
	)
}
