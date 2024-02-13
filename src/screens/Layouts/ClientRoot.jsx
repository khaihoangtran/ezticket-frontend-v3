import { useEffect } from "react";
import { Header, SideNav } from "../../components/Client";
import { Link, Outlet } from "react-router-dom";
import { checkAuth } from "../../utils";

export default function ClientRoot() {

	useEffect(() => {
		if(!checkAuth()) {
			localStorage.removeItem('user');
		}
	}, [])

	return (
		<>
			<Header />

			<SideNav />

			<main className="main min-h-screen bg-zinc-900 text-white laptop:ml-[20%]">
				<Outlet />
			</main>

			{/* Footer */}
		</>
	);
}
