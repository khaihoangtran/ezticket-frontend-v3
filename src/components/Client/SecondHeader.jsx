import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { LuFolderOpen, LuHelpCircle, LuLogOut, LuUser } from "react-icons/lu";

const logo_url = process.env.REACT_APP_LOGO_URL;

export default function SecondHeader() {
	const [user, setUser] = useState(() => {
		let json = localStorage.getItem("user");
		return json ? JSON.parse(localStorage.getItem("user")) : null;
	});

	return (
		<>
			<header
				className="w-full h-16 bg-main 
            flex items-center 
            fixed top-0 z-10
            border-b-1 border-slate-500"
			>
				<div className="flex items-center h-[100%] ml-10 px-8">
					<Link
						to="/"
						className="flex items-center justify-center w-[30%]"
					>
						<img src={logo_url} className="w-[30%]" />
					</Link>

					<div className="desktop:flex hidden items-center relative w-[100%]">
						<svg
							className="absolute left-3"
							width="22"
							height="24"
							fill="none"
						>
							<path
								d="M11 17a6 6 0 100-12 6 6 0 000 12zM18.5 18.5l-3-3"
								stroke="#fff"
								stroke-width="2"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>

						<input
							type="text"
							className="bg-slate-700 outline-none
                        	focus:outline-none focus:ring-2 hover:ring-1 hover:ring-white focus:ring-amber-200
                       	  text-white text-sm leading-8 h-8 px-12 py-5 rounded border-0 caret-green-300"
							placeholder="Tìm kiếm"
						/>
					</div>
				</div>
				<div className="flex items-center justify-center h-[100%] mr-10 ml-auto z-10 px-8">
					<Link
						to="#"
						className="flex items-center justify-center w-32 mx-4 
						bg-slate-700 text-white text-sm
						h-9 leading-9 min-w-[90px] 
						border-2 border-slate-700 rounded-lg"
					>
						Tạo sự kiện
					</Link>

					<div className="pointer">
						<Link to="#" className="flex items-center">
							<svg width="24" height="24" fill="none">
								<path
									d="M19.758 12a2.91 2.91 0 011.928-2.74c.52-.186.98-.617.98-1.17V5.243a1 1 0 00-1-1H2.334a1 1 0 00-1 1v2.849c0 .552.461.983.981 1.17a2.91 2.91 0 010 5.478c-.52.187-.98.618-.98 1.17v2.848a1 1 0 001 1h19.333a1 1 0 001-1V15.91c0-.552-.461-.983-.981-1.17A2.91 2.91 0 0119.758 12z"
									stroke="#fff"
									stroke-width="2"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									d="M8.121 10.06h7.758M8.121 13.94h7.758"
									stroke="#fff"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						</Link>
					</div>

					<div className="flex items-center text-white text-sm">
						{user ? (
							<span className="px-4 cursor-pointer">
								<Dropdown
									label=""
									renderTrigger={() => (
										<span>{user.fullname}</span>
									)}
								>
									<Dropdown.Header>
										<span className="flex flex-row gap-2 text-sm text-center items-center">
											<LuUser /> {user.email}
										</span>
									</Dropdown.Header>
									<Dropdown.Item>
										<Link
											to="/business"
											className="flex flex-row gap-2 text-sm text-center items-center"
										>
											<LuFolderOpen /> Quản lý sự kiện
										</Link>
									</Dropdown.Item>
									<Dropdown.Item>
										<span className="flex flex-row gap-2 text-sm text-center items-center">
											<LuHelpCircle /> Hỗ trợ
										</span>
									</Dropdown.Item>

									<Dropdown.Divider />
									<Dropdown.Item>
										<span
											onClick={() => {
												localStorage.removeItem("user");
												localStorage.removeItem(
													"accessToken"
												);
												window.location.href = "/";
											}}
											className="flex flex-row gap-2 text-sm text-center items-center"
										>
											<LuLogOut /> Đăng xuất
										</span>
									</Dropdown.Item>
								</Dropdown>
							</span>
						) : (
							<Link to="/login" className="px-4">
								Đăng nhập | Đăng ký
							</Link>
						)}
					</div>
				</div>
				<div
					className="w-full h-10 bg-slate-200 px-8
                flex items-center 
                fixed top-16 z-1
                border-b-1 border-slate-500"
				>
					<div className="flex flex-row items-center h-[100%] w-[100%] ml-10">
						<ul className="flex flex-row items-center justify-start desktop:gap-10 gap-5 text-black px-10">
							<li className="desktop:text-sm text-xs font-medium pointer hover:text-emerald-300">
								<Link to="#">Concert nhạc</Link>
							</li>
							<li className="desktop:text-sm text-xs font-medium pointer hover:text-emerald-300">
								<Link to="#">Sân khấu nghệ thuật</Link>
							</li>
							<li className="desktop:text-sm text-xs font-medium pointer hover:text-emerald-300">
								<Link to="#">Khoa học - diễn thuyết</Link>
							</li>
							<li className="desktop:text-sm text-xs font-medium pointer hover:text-emerald-300">
								<Link to="#">Tham quan du lịch</Link>
							</li>
							<li className="desktop:text-sm text-xs font-medium pointer hover:text-emerald-300">
								<Link to="#">Thể dục thể thao</Link>
							</li>
							<li className="desktop:text-sm text-xs font-medium pointer hover:text-emerald-300">
								<Link to="#">Hội thảo - cộng đồng</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
}
