import { useEffect, useState } from "react";
import EditForm from "../../../components/Admin/EditForm";
import ListTable from "../../../components/Admin/ListTable";
import axios from "axios";
import UpdateEventTab from "./UpdateEventTab";

export default function EventListTab({ setPage }) {
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState({});

	const [events, setEvents] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState("");

	useEffect(() => {
		const options = {
			method: "GET",
			url: `${process.env.REACT_APP_API_URL}/api/event/search`,
			headers: {
				"Content-Type": "application/json",
			},
			params: {},
		};

		const fetchDataEvent = async () => {
			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						setEvents(result.events);
					}

					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		fetchDataEvent();

	}, []);

	if(events.length === 0) {
		return <div className="px-6 py-4 mt-[-10px] flex items-center flex-col justify-center h-[90vh]">
			<h1>Không tìm thấy sự kiện nào</h1>
			{/* <button className="px-4 py-2 my-5 bg-main">Tạo sự kiện</button> */}
		</div>
	}

	return (
		<>
			{isEditing ? (
				<UpdateEventTab event_id={selectedEvent} setIsEditing={setIsEditing} />
			) : (
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
					</div>

					<ListTable
						headcells={headcells}
						events={events}
						setIsEditing={setIsEditing}
						setSelectedEvent={setSelectedEvent}
						setPage={setPage}
					/>
				</section>
			)}
		</>
	);
}

const headcells = [
	"Banner",
	"Tên sự kiện",
	"Ngày diễn ra",
	"Địa điểm",
	"Trạng thái",
];

