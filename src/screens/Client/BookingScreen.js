import { useEffect } from "react";
import { Banner } from "../../components/Client";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { LuUser, LuMail, LuSmartphone, LuTicket } from "react-icons/lu";

export default function BookingScreen() {
	return (
		<section className="mt-[6.5rem] min-h-screen">
			<Banner />

			<div className="booking-container w-[70%] mx-auto">
				<div className="grid grid-cols-6 gap-4 my-5">
					<div className="desktop:col-span-4 laptop:col-span-3 col-span-6 bg-zinc-800 p-4">
						<table className="table w-[100%]">
							<tbody>
								<tr className="table-row border-b border-emerald-300 ">
									<td className="text-md font-medium text-emerald-300 py-2">
										Thông tin vé
									</td>
                                    
									<td colSpan={4} className="text-sm py-2 text-right text-gray-300">
                                        17:15 - 19:15, 12 tháng 2, 2024
									</td>
									
								</tr>
								
								<tr className="table-row">
									<td className="py-2 text-sm">
										Hoàng hôn
									</td>
									<td colSpan={3} className="py-2 text-sm text-right">
                                        300.000 VND
									</td>
									<td className="py-2 w-24 text-sm text-right">
										<input className="w-16 py-1 pr-0 text-center text-sm text-black" type="number" defaultValue={0}  patterns="[0-9]" />
									</td>
									
								</tr>
								<tr className="table-row">
									<td className="py-2 text-sm">
										Chiều tà
									</td>
									<td colSpan={3} className="py-2 text-sm text-right">
                                        400.000 VND
									</td>
									<td className="py-2 w-24 text-sm text-right">
										<input className="w-16 py-1 pr-0 text-center text-sm text-black" type="number" defaultValue={0}  patterns="[0-9]" />
									</td>
									
								</tr>
								<tr className="table-row">
									<td className="py-2 text-sm">
										Nhá nhem
									</td>
									<td colSpan={3} className="py-2 text-sm text-right">
                                        500.000 VND
									</td>
									<td className="py-2 w-24 text-sm text-right">
										<input className="w-16 py-1 pr-0 text-center text-sm text-black" type="number" defaultValue={0}  patterns="[0-9]" />
									</td>
									
								</tr>
								<tr className="table-row">
									<td className="py-2 text-sm">
										Chập choạng
									</td>
									<td colSpan={3} className="py-2 text-sm text-right">
                                        600.000 VND
									</td>
									<td className="py-2 w-24 text-sm text-right">
										<input className="w-16 py-1 pr-0 text-center text-sm text-black" type="number" defaultValue={0}  patterns="[0-9]" />
									</td>
									
								</tr>

								
							</tbody>
						</table>
					</div>

					<div className="relative desktop:col-span-2 laptop:col-span-3 col-span-6 w-[100%]">
						<div className="w-[100%] p-4 bg-zinc-800">
							<div className="w-[100%]">
								<table className="table w-[100%]">
									<tbody>
										<tr className="table-row border-b border-emerald-300">
											<td
												colSpan={3}
												className="text-md font-medium text-emerald-300 py-2"
											>
												Thông tin người nhận vé
											</td>
										</tr>
										<tr className="table-row">
											<td className="py-3">
												<LuUser />
											</td>
											<td className="text-sm font-medium px-1">
												Họ tên
											</td>
											<td className="text-sm text-right">
												Kuo Nhan Dung
											</td>
										</tr>

										<tr className="table-row">
											<td className="py-3">
												<LuMail />
											</td>
											<td className="text-sm font-medium px-1">
												Email
											</td>
											<td className="text-sm text-right">
												nkeyskuo124@gmail.com
											</td>
										</tr>

										<tr className="table-row">
											<td className="py-3">
												<LuSmartphone />
											</td>
											<td className="text-sm font-medium px-1">
												Điện thoại
											</td>
											<td className="text-sm text-right">
												0767916592
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="w-full bg-gray-200 font-medium text-slate-700 px-4 h-12 flex flex-row items-center justify-between">
							<span className="text-sm">Tổng cộng</span>
							<span className="text-sm">0</span>
						</div>

                        <button className="bg-main py-3 text-center rounded w-[100%] mt-5">Tiếp tục</button>
					</div>
				</div>
			</div>
		</section>
	);
}
