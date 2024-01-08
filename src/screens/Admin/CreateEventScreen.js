import { FileInput } from "flowbite-react";

import axios from "axios";
import { useState } from "react";

export default function CreateEventScreen() {
	const [file, setFile] = useState(null);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("name", "Event test 2");
		formData.append("categories", [
			"6596af9276222539fdf1d4f8",
			"6596afbf76222539fdf1d4fa",
		]);
		formData.append("author", "65954af7cd32fb0977100004");
		formData.append("occur_date", Date.now());
		formData.append("time", "17:15 - 19:15");
		formData.append("location", "Lululola Coffee");
		formData.append(
			"address",
			"Đường 3/4, Đồi Cà Ri Dê, Phường 3, Thành Phố Đà Lạt, Tỉnh Lâm Đồng"
		);

		const options = {
			method: "PUT",
			url: "http://localhost:5000/api/event/update/6596f37a3c2636a585e6908c",
			params: {},
			headers: {
				"Content-Type": "multipart/form-data",
			},
			data: formData,
		};

		const createEvent = async () => {
			await axios
				.request(options)
				.then((response) => {
					console.log(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		createEvent();
	};

	return (
		<section className="min-h-screen mt-[-10px]">
			<div className="flex flex-col items-center justify-center h-[80vh]">
				<div className="create-form w-[25%] items-center justify-center text-center">
					<FileInput name="file" onChange={handleFileChange} />

					<button
						onClick={handleSubmit}
						className="mt-10 py-2 px-20 bg-main rounded"
					>
						Submit
					</button>
				</div>
			</div>
		</section>
	);
}
