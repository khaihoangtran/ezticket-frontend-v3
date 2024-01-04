import { Table } from "flowbite-react";
import { LuAlarmClock, LuMapPin, LuTicket } from "react-icons/lu";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EventDetailScreen() {

	return (
		<section className="mt-[6.5rem] min-h-screen bg-black-500">
			<img className="w-full" src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2023/11/08/3C2FE2.jpg" />

			<div className="event-content px-5 w-[80%] mx-auto mt-10">
				<div className="grid grid-cols-4 gap-4 my-5">
					<div className="desktop:col-span-3 laptop:col-span-2 bg-zinc-800 col-span-4 min-h-[100%]">
					<div className="px-6 py-0 overflow-hidden">
							<h4 className="py-3 px-0 border-b border-emerald-300">
								About
							</h4>

							<div className="event-about py-3 px-0 mt-5">
								<div className="relative overflow-hidden ">
									<div className="leading-4">
										<p className="text-center font-medium">
											Liveshow Tăng Phúc
										</p>
										<p className="mt-3">
											<span className="leading-6 text-sm">
												Lululola Show - Hơn cả âm nhạc,
												không gian lãng mạn đậm chất thơ
												Đà Lạt bao trọn hình ảnh thung
												lũng Đà Lạt, được ngắm nhìn
												khoảng khắc hoàng hôn thơ mộng
												đến khi Đà Lạt về đêm siêu lãng
												mạn, được giao lưu với thần
												tượng một cách chân thật và gần
												gũi nhất trong không gian ấm áp
												và không khí se lạnh của Đà Lạt.
												Tất cả sẽ&nbsp; mang đến một đêm
												nhạc ấn tượng mà bạn không thể
												quên khi đến với Đà Lạt.
											</span>
										</p>

										<p className="mt-3">
											<img src="https://tkbvn-tokyo.s3.amazonaws.com/Upload/agenda/2023/12/19/9D8B64.jpg" />
										</p>

										<p className="mt-3">
											<img src="https://tkbvn-tokyo.s3.amazonaws.com/Upload/agenda/2022/08/03/00053E.jpg" />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="desktop:col-span-1 laptop:col-span-2 laptop:flex flex-col hidden 
						rounded-lg bg-zinc-800 relative  max-h-[320px]"
					>
						<Link to="/event/23158311/booking"
							className="absolute w-[100%] bottom-0 pointer
							px-3 py-3 bg-main text-center"
						>
							Mua ngay
						</Link>
						<div className="py-0 overflow-hidden rounded-md">
							<div className="rounded-md mb-3 px-2">
								<h2 className="text-left p-4 mb-3 leading-6 font-medium text-sm border-b border-emerald-300">
									[LULULOLA SHOW] QUỐC THIÊN &amp; LÂM BẢO
									NGỌC | MÙNG 3 TẾT
								</h2>

								<div className="s1 py-2 px-3 flex flex-row items-center">
									<span className="">
										<LuAlarmClock size={20} />
									</span>
									<div className="ev-txt ml-4 relative">
										<span className="block text-sm">
											07:30 PM - 10:30 PM
										</span>
									</div>
								</div>

								<div className="s2 py-4 px-3 flex flex-col mb-1">
									<div className="flex flex-row">
										<span className="">
											<LuMapPin size={20} />
										</span>
										<div className="ev-txt ml-4 relative">
											<span className="block text-sm">
												Sân khấu kịch Idecaf
											</span>
										</div>
									</div>
									<div className="flex flex-row">
										<span className=""></span>
										<div className="ev-txt ml-9 relative">
											<span className="block text-xs">
												Số 28 Lê Thánh Tôn, Quận 1,
												Thành Phố Hồ Chí Minh
											</span>
										</div>
									</div>
								</div>

								<div
									className="flex flex-row
									border-t border-emerald-300 px-3 py-4"
								>
									<span className="">
										<LuTicket size={20} />
									</span>
									<div className="ev-txt ml-4 relative">
										<span className="block text-sm">
											Từ{" "}
											<span className="text-emerald-300 font-medium">
												150.000 VND
											</span>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="laptop:block hidden overflow-hidden bg-none opacity-1 border-0 p-0 mt-12">
							<img
								alt="Ez Ticket"
								src="https://beta.ticketbox.vn/_next/image?url=%2F_next%2Fstatic%2Fimages%2FDefaultAdsbanner.png&w=1920&q=75"
								decoding="async"
								className="absolute w-full"
							/>
						</div>
					</div>
					
				</div>
				<div className="grid grid-cols-4 gap-4">
					<div className="laptop:col-span-3 col-span-4 bg-zinc-800 min-h-[100%] rounded-lg">
						
					</div>

					<div className="col-span-1 relative">
						
					</div>
				</div>
			</div>
		</section>
	);
}
