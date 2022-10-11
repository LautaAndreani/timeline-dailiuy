import { Detail } from "../types/types"

type Props = {
	detail: Detail
}

export default function Details({ detail }: Props) {
	const { icon, value } = detail
	return (
		<span className="flex flex-col gap-2">
			<figure className="flex gap-1 text-brand-light_title font-medium">
				<img src={icon.src} alt={icon.alt_text} />
				<figcaption>{icon.label}</figcaption>
			</figure>
			<label className="text-brand-title">{value}</label>
		</span>
	)
}
