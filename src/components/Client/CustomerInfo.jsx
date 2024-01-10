import React from "react";
import { LuUser, LuMail, LuSmartphone } from "react-icons/lu";

const CustomerInfo = () => {
	return (
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
                <div className="py-2"></div>
				<tr className="table-row">
					<td className="py-3">
						<LuUser />
					</td>
					<td className="text-sm font-medium px-1">Họ tên</td>
					<td className="text-sm text-right">Kuo Nhan Dung</td>
				</tr>

				<tr className="table-row">
					<td className="py-3">
						<LuMail />
					</td>
					<td className="text-sm font-medium px-1">Email</td>
					<td className="text-sm text-right">
						nkeyskuo124@gmail.com
					</td>
				</tr>

				<tr className="table-row">
					<td className="py-3">
						<LuSmartphone />
					</td>
					<td className="text-sm font-medium px-1">Điện thoại</td>
					<td className="text-sm text-right">0767916592</td>
				</tr>
			</tbody>
		</table>
	);
};

export default CustomerInfo;
