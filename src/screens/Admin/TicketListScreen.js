import { useState } from "react";
import EditForm from "../../components/Admin/EditForm";
import ListTable from "../../components/Admin/ListTable";

const headcells = [
	"Tên sự kiện",
	"Tên vé",
	"Giá vé",
	"Số lượng",
];

const rows = [
	[
		"Lululola Đêm nhạc cùng Quốc Thiên",
		"Vé cơ bản",
		"300.000đ",
		"95",
	],
	[
		"Lululola Đêm nhạc cùng Quốc Thiên",
		"Vé nâng cao",
		"400.000đ",
		"20",
	],
];

const editors = [
	{
		title: "Tên vé",
		about: "Tên của loại vé",
		tag: "name",
	},
	{
		title: "Giá vé",
		about: "Giá vé bán ra",
		tag: "price",
	},
	{
		title: "Số lượng",
		about: "Số lượng vé còn lại",
		tag: "quantity",
	}
];

export default function TicketListScreen() {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<>
			<section className="px-6 py-4 mt-[-10px]">
				<div className="flex items-center justify-between mb-10">
					<div className="grow">
						<div className="relative pt-2">
							<h1 className="text-2xl whitespace-nowrap">
								Danh sách loại vé
							</h1>
						</div>
						<p className="whitespace-nowrap overflow-hidden text-xs text-gray-400 ">
							API ID: 315F4
						</p>
					</div>

					{isEditing && (
						<div className="pt-4 flex flex-row gap-3">
							<button onClick={() => {
								setIsEditing(false);
							}} className="bg-gray-200 text-sm min-w-32 px-4 py-1">
								Trở lại
							</button>
							<button onClick={() => {
								setIsEditing(false)
							}} className="text-sm bg-main min-w-32 px-4 py-1">
								Lưu
							</button>
						</div>
					)}
				</div>

				{isEditing ? (
					<EditForm
						editors={editors}
					/>
				) : (
					<ListTable
						setIsEditing={setIsEditing}
						headcells={headcells}
						rows={rows}
					/>
				)}
			</section>
		</>
	);
}
