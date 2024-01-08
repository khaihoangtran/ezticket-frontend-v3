import React from "react";
import { LuTicket } from "react-icons/lu";

const tickets = [
	{
		name: "Hoàng hôn",
		price: 300000,
	},
	{
		name: "Chiều tà",
		price: 400000,
	},
	{
		name: "Nhá nhem",
		price: 500000,
	},
	{
		name: "Chập choạng",
		price: 600000,
	},
];

const TicketList = () => {
	return (
		<>
			<table className="table w-[100%]">
				<tbody>
					<tr className="table-row border-b border-emerald-300 ">
						<td className="text-md font-medium text-emerald-300 py-2">
							Thông tin vé
						</td>

						<td
							colSpan={4}
							className="text-sm py-2 text-right text-gray-300"
						>
							17:15 - 19:15, 12 tháng 2, 2024
						</td>
					</tr>
                    <div className="py-2"></div>
					{tickets.map((ticket, index) => {
						return (
							<tr key={index} className="table-row">
								<td className="py-2 text-sm flex items-center gap-2">
									<LuTicket className="inline" /> {ticket.name}
								</td>
								<td
									colSpan={3}
									className="py-2 text-sm text-right"
								>
									{(ticket.price).toLocaleString('vi-vn')} VND
								</td>
								<td className="py-2 w-24 text-sm text-right">
									<input
										className="w-16 py-1 pr-0 text-center text-sm text-black"
										type="number"
										defaultValue={0}
										patterns="[0-9]"
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default TicketList;
