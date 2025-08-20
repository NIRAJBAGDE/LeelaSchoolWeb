
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const BlogSidebarModules = dynamic(() => import('@/modules/BlogSidebar'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderFive />

			<BlogSidebarModules />

			<Footer />
		</main>
	)
}
