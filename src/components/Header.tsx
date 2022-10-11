import { Detail } from "../types/types"
import Details from "./Details"

type Props = { details: Detail[] }

export default function Header({ details }: Props) {
	return (
		<header className="container">
			<h1 className="font-merriweather text-3xl text-brand-title">Package Details</h1>
			<section className="flex flex-wrap gap-3 justify-between container-stats bg-brand-body border-2 border-brand-card_border rounded-xl mt-8 p-7">
				{details.map(detail => (
					<Details detail={detail} key={detail.value} />
				))}
			</section>
		</header>
	)
}
