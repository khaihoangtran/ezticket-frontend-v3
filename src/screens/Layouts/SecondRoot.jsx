import { useEffect } from "react";
import { SecondHeader } from "../../components/Client";
import { Link, Outlet } from "react-router-dom";
import { checkAuth } from "../../utils";


export default function SecondRoot() {
	useEffect(() => {
		if(!checkAuth()) {
			console.log('pass')
			localStorage.removeItem('user');
		}
	}, [])

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
