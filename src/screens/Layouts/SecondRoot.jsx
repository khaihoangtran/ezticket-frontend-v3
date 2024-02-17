import { useEffect } from "react";
import { SecondHeader } from "../../components/Client";
import { Link, Outlet } from "react-router-dom";


export default function SecondRoot() {

	return (
		<>
			<SecondHeader />

			<main className="main min-h-screen bg-black-500 text-white">
				<Outlet />
			</main>

			{/* Footer */}
		</>
	);
}
