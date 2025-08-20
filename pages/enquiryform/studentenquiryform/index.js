import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const StudentEnquiryFormModules = dynamic(() => import('@/modules/StudentEnquiryForm'), {
  loading: () => <Preloader />,
});

export default function InstructorRegistration() {
	return (
		<main>
			<HeaderFive />

			<StudentEnquiryFormModules />

			<Footer />
		</main>
	)
}
