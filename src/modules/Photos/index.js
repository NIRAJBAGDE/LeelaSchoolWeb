import BreadCrumbs from "@/components/BreadCrumbs"
import PhotoArea from "./PhotoArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function PhotoModules() {
	return (
		<main>
			{/* <BreadCrumbs
				Title="Photos"
				subTitle="Photos"
			/> */}
			<PhotoArea />
			<ScrollTop />
		</main>
	)
}
