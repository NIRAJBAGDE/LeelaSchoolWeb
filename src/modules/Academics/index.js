import BreadCrumbsAcademics from "@/components/BreadCrumbsAcademics"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Academics from "./Academics"

export default function ServiceModules() {
	return (
		<main>
			<BreadCrumbsAcademics
				Title="Academics"
				subTitle="Academics"
			/>
			<Academics />
			{/* <Newsletter /> */}
			<ScrollTop />
		</main>
	)
}
