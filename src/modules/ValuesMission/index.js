import Valuesmission from "./Values"
import BreadCrumbsMission from "@/components/BreadCrumbsMission"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ValuesMissionModules() {
	return (
		<main>
			<BreadCrumbsMission
				Title="Mission & Vision"
				subTitle="Mission & Vision"
			/>
			
			<Valuesmission />
			
			{/* <Newsletter /> */}

			<ScrollTop />
			
		</main>
	)
}
