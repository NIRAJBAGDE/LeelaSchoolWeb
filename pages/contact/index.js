import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ContactModules = dynamic(() => import('@/modules/Contact'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<HeaderFive />

			<ContactModules />

			<Footer />
		</main>
	)
}
