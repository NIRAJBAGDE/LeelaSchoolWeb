import EducatorsArea from "./EducatorsArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import BreadCrumbsEducators from "@/components/BreadCrumbsEducators"

export default function EducatorsModules() {
	return (
		<main>
			<BreadCrumbsEducators
				Title="Educators"
				subTitle="EducatorsArea"
			/>
			<EducatorsArea />
			{/* <Newsletter /> */}
			<ScrollTop />
		</main>
	)
}
