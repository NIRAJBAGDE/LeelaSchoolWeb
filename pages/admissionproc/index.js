
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AdmissionProcedureModules = dynamic(() => import('@/modules/AdmissionProcedure'), {
  loading: () => <Preloader />,
});

export default function Event() {
	return (
		<main>
			<HeaderFive />

			<AdmissionProcedureModules />

			<Footer />
		</main>
	)
}
