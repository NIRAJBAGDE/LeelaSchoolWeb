import WhyUs from "./whyus"
import BreadCrumbsWhyUs from "@/components/BreadCrumbsWhyUs"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function WhyUsModules() {
	return (
		<main>
			<BreadCrumbsWhyUs
				Title="Why Us"
				subTitle="Why Us"
			/>
			
			<WhyUs />
			
			{/* <Newsletter /> */}

			<ScrollTop />
			
		</main>
	)
}
