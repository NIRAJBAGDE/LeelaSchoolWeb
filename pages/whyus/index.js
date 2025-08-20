
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import WhyUs from '@/modules/WhyUs/whyus';
import dynamic from 'next/dynamic'
 
const WhyUsModulesModules = dynamic(() => import('@/modules/WhyUs'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderFive /> 

			<WhyUsModulesModules />

			<Footer />
		</main>
	)
}
