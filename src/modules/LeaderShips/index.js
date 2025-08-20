import LeaderShipsArea from "./LeaderShipsArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import BreadCrumbsLeadership from "@/components/BreadCrumbsLeadership"

export default function LeaderShipsModules() {
	return (
		<main>
			<BreadCrumbsLeadership
				Title="LeaderShip"
				subTitle="LeaderShip"
			/>
			<LeaderShipsArea  />
			{/* <Newsletter /> */}
			<ScrollTop />
		</main>
	)
}
