
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const BookListModules = dynamic(() => import('@/modules/BookList'), {
  loading: () => <Preloader />,
});

export default function Course() {
	return (
		<main>
			<HeaderFive />

			<BookListModules />

			<Footer />
		</main>
	)
}
