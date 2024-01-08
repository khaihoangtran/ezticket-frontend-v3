import BusinessSideNav from "../../components/Admin/BusinessSideNav";
import { Link, Outlet } from "react-router-dom";
import MenuTab from "../../components/Admin/MenuTab";
import { useState } from "react";
import {
	MdAddBox,
	MdBusiness,
	MdDashboard,
	MdList,
	MdOutlineCrop,
	MdRule,
	MdSettings,
} from "react-icons/md";
import Editor from "../../components/Admin/Editor";
import { CreateEventScreen, DashboardScreen, EventListScreen, TicketListScreen, UpdateBusinessScreen } from "../Admin";

const menu = {
	"Trang chủ": [
		{
			tab: "Trang chủ",
			icon: MdDashboard,
			content: <DashboardScreen />,
		},
		{
			tab: "Chỉnh sửa",
			icon: MdSettings,
			content: <CreateEventScreen />,
		},
	],
	"Tổ chức": [
		{
			tab: "Cập nhật",
			icon: MdSettings,
			content: <UpdateBusinessScreen />,
		},
		{
			tab: "Điều khoản",
			icon: MdRule,
			content: "",
		},
	],
	"Sự kiện": [
		{
			tab: "Danh sách sự kiện",
			icon: MdList,
			content: <EventListScreen />,
		},
		{
			tab: "Tạo mới",
			icon: MdAddBox,
			content: "",
		},
		{
			tab: "Hướng dẫn",
			icon: MdOutlineCrop,
			content: "",
		},
	],
	Vé: [
		{
			tab: "Danh sách vé",
			icon: MdList,
			content: <TicketListScreen />,
		},
		{
			tab: "Tạo mới",
			icon: MdAddBox,
			content: "",
		},
		{
			tab: "Hướng dẫn",
			icon: MdOutlineCrop,
			content: "",
		},
	],
};

export default function AdminRoot() {
	const [page, setPage] = useState("Sự kiện");

	return (
		<>
			<div className="flex min-h-screen">
				{/* Sidebar */}
				<aside className="w-64">
					<BusinessSideNav setPage={setPage} />
				</aside>

				{/* Content Area */}
				<div className="flex-1 flex flex-col">
					{/* MenuTab */}
					<section className="flex-shrink-0">
						<MenuTab list={menu[page]} />
					</section>

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
