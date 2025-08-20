
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ExamModule = dynamic(() => import('@/modules/ExamModule'), {
  loading: () => <Preloader />,
});

export default function Faq() {
	return (
		<main>
			<HeaderFive />

			<ExamModule />

			<Footer />
		</main>
	)
}
