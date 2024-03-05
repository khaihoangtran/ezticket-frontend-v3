import axios from "axios";
import BusinessSideNav from "../../components/Admin/BusinessSideNav";
import AdminSideNav from "../../components/Admin/AdminSideNav";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminRoot() {
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const checkAdmin = async () => {
			const token = localStorage.getItem('adminToken');

			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/admin/test_authentication`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			}

			await axios.request(options)
				.then(response => {
					const result = response.data;

					if(result.success && result.isAdmin) {
						setIsAdmin(true);
					}

					console.log(result);
				})
				.catch(err => {
					window.location.href = '/admin/login';
					console.log(err)
				})
		}

		checkAdmin();
	}, [])
	
	return (
		<>
			{isAdmin && (
				<div className="flex min-h-screen">
					{/* Sidebar */}
					<aside className="w-64">
						<AdminSideNav /> 

					</aside>

					{/* Content Area */}
					<div className="flex-1 flex flex-col">
					
						{/* Main Content */}
						<main className="flex-1 bg-gray-100 text-white overflow-auto">
							<Outlet />
						</main>

						{/* Footer */}
					</div>
				</div>
			) }
		</>
	);
}
