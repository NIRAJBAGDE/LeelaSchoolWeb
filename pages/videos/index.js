import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const VideosModules = dynamic(() => import('@/modules/Videos'), {
  loading: () => <Preloader />,
});

export default function Teacher() {
	return (
		<main>
			<HeaderFive />

			<VideosModules />

			<Footer />
		</main>
	)
}
