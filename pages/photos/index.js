import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const PhotosModules = dynamic(() => import('@/modules/Photos'), {
  loading: () => <Preloader />,
});

export default function Teacher() {
	return (
		<main>
			<HeaderFive />

			<PhotosModules />

			<Footer />
		</main>
	)
}
