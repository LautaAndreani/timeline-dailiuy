import { Header, ShippingState } from "./components"
import shipping from "./db/shipping.json"

function App() {
	return (
		<div className="min-h-screen min-w-full bg-brand-body flex justify-center items-center">
			<div className="top-[10%] left-[30%] absolute h-[500px] w-[500px] rounded-xl bg-brand-light_title hidden lg:inline-block"></div>
			<div className="container relative bg-brand-card shadow-card rounded-xl p-9 font-poppins z-10 w-[80%] lg:w-[30%]">
				<Header details={shipping.product_details} />
				<main className="timeline container mt-6 flex gap-4">
					<div className="flex flex-col">
						{shipping.state.map(state => (
							<ShippingState state={state} key={state.title} />
						))}
					</div>
				</main>
			</div>
		</div>
	)
}

export default App
