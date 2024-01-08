import { useEffect, useState } from "react";
import { Banner } from "../../components/Client";
import { Link } from "react-router-dom";
import TicketList from "../../components/Client/TicketList";
import CustomerInfo from "../../components/Client/CustomerInfo";
import { BiCreditCard, BiLogoPaypal, BiLogoAmazon } from "react-icons/bi";

export default function BookingScreen() {
	const [ paymentActive, setPaymentActive] = useState(1);

	return (
		<section className="mt-[6.5rem] min-h-screen">
			<Banner />

			<div className="booking-container w-[70%] mx-auto">
				<div className="grid grid-cols-6 gap-4 my-5">
					<div className="desktop:col-span-4 laptop:col-span-3 col-span-6 bg-zinc-800 p-4 self-start">
						<TicketList />
					</div>

					<div className="relative desktop:col-span-2 laptop:col-span-3 col-span-6 w-[100%]">
						<div className="w-[100%] px-4 py-4 bg-zinc-800">
							<div className="w-[100%] pb-3">
								<CustomerInfo />
							</div>
						</div>
						<div className="w-full bg-gray-200 font-medium text-slate-700 px-4 h-12 flex flex-row items-center justify-between ">
							<span className="text-sm">Tổng cộng</span>
							<span className="text-sm">0</span>
						</div>

						<button className="absolute bg-main py-3 text-center rounded w-[100%] mt-5">
							Tiếp tục
						</button>
					</div>

					<div className="desktop:col-span-4 laptop:col-span-3 col-span-6 bg-zinc-800 p-4 self-start">
						<div className="w-[100%]">
							<div className="border-b border-emerald-300 ">
								<div className="text-md font-medium text-emerald-300 py-2">
									Phương thức thanh toán
								</div>
							</div>
							<div className="py-2"></div>
							<div className="grid grid-cols-3 gap-5 p-4">
								
								<div className="col-span-1">
									<div
										className={`rounded-md flex flex-col items-center justify-center w-full
										border-2 border-${paymentActive === 1 ? 'emerald' : 'slate'}-300 py-6 gap-2
										hover:border-emerald-300 hover:opacity-90 cursor-pointer`}
										onClick={() => {
											setPaymentActive(1);
										}}
									>
										<BiCreditCard size={40} />
										<p>Thanh toán với thẻ Visa</p>
									</div>
								</div>
								<div className="col-span-1">
									<div
										className={`rounded-md flex flex-col items-center justify-center w-full 
										border-2 border-${paymentActive === 2 ? 'emerald' : 'slate'}-300 py-6 gap-2
										hover:border-emerald-300 hover:opacity-90 cursor-pointer `}
										onClick={() => {
											setPaymentActive(2);
										}}
									>
										<BiLogoPaypal size={40} />
										<p>Thanh toán với Paypal</p>
									</div>
								</div>
								<div className="col-span-1">
									<div
										className={`rounded-md flex flex-col items-center justify-center w-full 
										border-2 border-${paymentActive === 3 ? 'emerald' : 'slate'}-300 py-6 gap-2
										hover:border-emerald-300 hover:opacity-90 cursor-pointer `}
										onClick={() => {
											setPaymentActive(3);
										}}
									>
										<BiLogoAmazon size={40} />
										<p>Thanh toán với Amazon</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
