
import ContactArea from "./ContactArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import BreadCrumbsContacts from "@/components/BreadCrumbsContacts"

export default function ContactModules() {
	return (
		<main>
			<BreadCrumbsContacts
				Title="Contact"
				subTitle="Contact"
			/>
			<ContactArea />
			{/* <Newsletter /> */}
			<ScrollTop />
		</main>
	)
}
