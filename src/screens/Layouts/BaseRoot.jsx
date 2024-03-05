
import { Outlet } from "react-router-dom";

export default function BaseRoot() {


	return (
		<>
			<div className="flex min-h-screen">
				
				{/* Content Area */}
				<div className="flex-1 flex flex-col">
				
					{/* Main Content */}
					<main className="flex-1 bg-gray-100 text-white overflow-auto">
						<Outlet />
					</main>

					{/* Footer */}
				</div>
			</div>

			{/* Footer */}
		</>
	);
}
