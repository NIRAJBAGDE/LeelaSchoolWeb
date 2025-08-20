import BreadCrumbsChairman from "@/components/BreadCrumbsChairman"
import ChairmansArea from "./ChairmansArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ChairmansMessageModules() {
	return (
		<main>
			<BreadCrumbsChairman
				Title="Director's Message"
				subTitle="Director's Message"
			/>
			<ChairmansArea  />
			{/* <Newsletter /> */}
			<ScrollTop />
		</main>
	)
}
