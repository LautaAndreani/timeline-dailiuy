import { ShippingStypes } from "../types/types"

type Props = { state: ShippingStypes }

export default function ShippingState({ state }: Props) {
	const { title, location, completed } = state

	return (
		<span className="state flex gap-4 min-h-fit">
			<span className="overflow-hidden min-w-fit min-h-full">
				<span
					className={`state-circle flex flex-col-reverse justify-end items-center after:inline-block after:w-5 after:h-5 after:border-2
					} after:border-brand-light_title after:rounded-full`}></span>
				<span className="ml-[.55rem] state-line before:inline-block before:w-[1.2px] before:bg-brand-light_title before:h-full"></span>
			</span>
			<div className="state-description py-1">
				<h2 className="text-brand-title">{title}</h2>
				<small className="text-brand-light_title">{location}</small>
			</div>
		</span>
	)
}
