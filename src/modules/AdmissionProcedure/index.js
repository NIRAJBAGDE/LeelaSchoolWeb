import BreadCrumbsAdmission from "@/components/BreadCrumbsAdmission"
import AdmissionProc from "./admissionproc"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function EventModules() {
	return (
		<main>
			<BreadCrumbsAdmission
				Title="Admission Procedure"
				subTitle="Admission Procedure"
			/>
			<AdmissionProc />
			{/* <Newsletter /> */}
			<ScrollTop />
		</main>
	)
}
