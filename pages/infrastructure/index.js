
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const InfrastructureModule = dynamic(() => import('@/modules/Infrastructure'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderFive />

			<InfrastructureModule />

			<Footer />
		</main>
	)
}
