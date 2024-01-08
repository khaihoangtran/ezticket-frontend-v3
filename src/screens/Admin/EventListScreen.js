import { useState } from "react";
import EditForm from "../../components/Admin/EditForm";
import ListTable from "../../components/Admin/ListTable";

const headcells = [
	"Banner",
	"Tên sự kiện",
	"Ngày diễn ra",
	"Địa điểm",
	"Trạng thái",
];

const rows = [
	[
		<img
			className="max-w-48"
			src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2023/07/03/FA624C.jpg"
		/>,
		"Lululola Đêm nhạc cùng Quốc Thiên",
		"24 tháng 12 năm 2024",
		"Quán cafe X, đồi Cà Ri Dê",
		"Đang diễn ra",
	],
	[
		<img
			className="max-w-48"
			src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2023/07/03/FA624C.jpg"
		/>,
		"Lululola Đêm nhạc cùng Quốc Thiên",
		"24 tháng 12 năm 2024",
		"Quán cafe X, đồi Cà Ri Dê",
		"Đang diễn ra",
	],
];

const editors = [
	{
		title: "Tên sự kiện",
		about: "Tên của sự kiện muốn tổ chức",
		tag: "name",
	},
	{
		title: "Thể loại",
		about: "Thể loại mà sự kiện hướng đến",
		tag: "categories",
	},
	{
		title: "Ngày diễn ra",
		about: "Ngày mà sự kiện diễn ra",
		tag: "occur_date",
	},
	{
		title: "Thời gian",
		about: "Khung thời gian sự kiện diễn ra",
		tag: "time",
	},
	{
		title: "Địa điểm",
		about: "Nơi sự kiện diễn ra",
		tag: "location",
	},
	{
		title: "Địa chỉ",
		about: "Địa chỉ của nơi diễn ra sự kiện",
		tag: "address",
	},
];

export default function EventListScreen() {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<>
			<section className="px-6 py-4 mt-[-10px]">
				<div className="flex items-center justify-between mb-10">
					<div className="grow">
						<div className="relative pt-2">
							<h1 className="text-2xl whitespace-nowrap">
								Danh sách sự kiện
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
						ckeditor={"Giới thiệu về sự kiện"}
						editors={editors}
						uploadbox={"Banner sự kiện"}
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
