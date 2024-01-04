import { Carousel } from "../../components/Client";
import React from "react";
import { Link } from "react-router-dom";

const events = [
	{
		title: "[Nhà Hát Kịch IDECAF] Chuyện Thần Tiên 5: CUỘC PHIÊU LƯU CỦA CẬU BÉ BÚP BÊ",
		date: "07/01/2024",
		category: "Sân khấu nghệ thuật",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/22/B2527D.jpg",
		link: "/event",
	},
	{
		title: 'HARMONY SHOW | CHỢT NHƯ NĂM 18 | LÂN NHÃ | "CHỊ ĐẸP" THÁI TRINH',
		date: "20/01/2024",
		category: "Concert nhạc",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/20/9B46BE.jpg",
		link: "/event",
	},
	{
		title: "[LULULOLA SHOW] QUỐC THIÊN & LÂM BẢO NGỌC | MÙNG 3 TẾT",
		date: "12/01/2024",
		category: "Concert nhạc",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/11/08/3C2FE2.jpg",
		link: "/event",
	},
	{
		title: "[ HOA BAY- SHOW GALA 2023 ĐẶC BIỆT ] - BỐ GẤU HOÀNG HẢI - JIMMII NGUYỄN - NGỌC PHẠM - JIMMII BAND",
		date: "22/03/2024",
		category: "Sân khấu nghệ thuật",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/01/8E8D21.jpg",
		link: "/event",
	},
	{
		title: "[FLOWER 1969’s] WORKSHOP WAXTABLET - HỌC LÀM SÁP THƠM",
		date: "11/02/2024",
		category: "Khoa học - diễn thuyết",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/26/8930E4.jpg",
		link: "/event",
	},
	{
		title: "[Nhà Hát Kịch IDECAF] Chuyện Thần Tiên 5: CUỘC PHIÊU LƯU CỦA CẬU BÉ BÚP BÊ",
		date: "07/01/2024",
		category: "Sân khấu nghệ thuật",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/22/B2527D.jpg",
		link: "/event",
	},
	{
		title: 'HARMONY SHOW | CHỢT NHƯ NĂM 18 | LÂN NHÃ | "CHỊ ĐẸP" THÁI TRINH',
		date: "20/01/2024",
		category: "Concert nhạc",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/20/9B46BE.jpg",
		link: "/event",
	},
	{
		title: "[LULULOLA SHOW] QUỐC THIÊN & LÂM BẢO NGỌC | MÙNG 3 TẾT",
		date: "12/01/2024",
		category: "Concert nhạc",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/11/08/3C2FE2.jpg",
		link: "/event",
	},
	{
		title: "[ HOA BAY- SHOW GALA 2023 ĐẶC BIỆT ] - BỐ GẤU HOÀNG HẢI - JIMMII NGUYỄN - NGỌC PHẠM - JIMMII BAND",
		date: "22/03/2024",
		category: "Sân khấu nghệ thuật",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/01/8E8D21.jpg",
		link: "/event",
	},
	{
		title: "[FLOWER 1969’s] WORKSHOP WAXTABLET - HỌC LÀM SÁP THƠM",
		date: "11/02/2024",
		category: "Khoa học - diễn thuyết",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/26/8930E4.jpg",
		link: "/event",
	},
	{
		title: 'HARMONY SHOW | CHỢT NHƯ NĂM 18 | LÂN NHÃ | "CHỊ ĐẸP" THÁI TRINH',
		date: "20/01/2024",
		category: "Concert nhạc",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/20/9B46BE.jpg",
		link: "/event",
	},
	{
		title: "[ HOA BAY- SHOW GALA 2023 ĐẶC BIỆT ] - BỐ GẤU HOÀNG HẢI - JIMMII NGUYỄN - NGỌC PHẠM - JIMMII BAND",
		date: "22/03/2024",
		category: "Sân khấu nghệ thuật",
		banner: "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/01/8E8D21.jpg",
		link: "/event",
	},
];

export default function HomeScreen() {
	return (
		<>
			<div className="w-[100%] flex-col mt-[4.5rem] min-h-screen flex items-center ">
				<div className="w-[72%] mt-16">
					<Carousel list={events} />
				</div>


				<div className="w-[90%] mt-16">
					<section className="flex justify-center overflow-hidden">
						<div className="max-w-[100%] px-4">
							<div className="desktop:mx-[-16px] mx-[-12px]">
								<div 
									className="grid gap-2
									desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1"
								>
									{events.map((event, index) => {
										return (
											<Link
												key={index}
												to={event.link}
												className="flex flex-col w-[100%] justify-start pointer bg-transparent px-3 py-3"
												onClick={() => {
													window.scrollTo(0,0);
												}}
											>
												<img
													src={event.banner}
													alt="Test"
													className="object-cover max-w-[100%] h-32 rounded-lg"
												/>
												<h4 className="mt-2 text-sm font-medium leading-6 hover:text-emerald-200">
													{event.title}
												</h4>
												<div className="mt-1 text-sm leading-5 text-gray-400">
													{event.date}
												</div>
												<div className="mt-1 text-sm leading-5 text-gray-400">
													{event.category}
												</div>
											</Link>
										);
									})}
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
