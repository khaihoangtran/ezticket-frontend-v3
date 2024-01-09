import { Checkbox, Table } from "flowbite-react";
import { LuDelete, LuFile, LuFileEdit, LuTrash } from "react-icons/lu";

export default function ListTable({ setIsEditing, headcells, events, setSelectedEvent }) {
	return (
		<div className="overflow-x-auto">
			<Table hoverable>
				<Table.Head>
					<Table.HeadCell className="p-4"></Table.HeadCell>

					{headcells.map((cell, index) => {
						return (
							<Table.HeadCell key={index}>{cell}</Table.HeadCell>
						);
					})}

					<Table.HeadCell>
						<span className="sr-only">Edit</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					{events.map((event, index) => {
						return (
							<Table.Row
								key={index}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="p-4">
									<Checkbox />
								</Table.Cell>

								<Table.Cell className="text-xs">
									<img
										className="max-w-48"
										src={event.banner}
									/>
								</Table.Cell>

								<Table.Cell className="text-xs" >{event.name}</Table.Cell>
								<Table.Cell className="text-xs" >{new Date(event.occur_date).toLocaleDateString('vi-vn')} <br /> {event.time}</Table.Cell>
								<Table.Cell className="text-xs" >{event.location} <br/> {event.address}</Table.Cell>

								<Table.Cell>
									<a
										href="#"
										className="flex flex-row gap-2 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
									>
										<LuFile />
										<LuFileEdit
											onClick={() => {
												setIsEditing(true);
												setSelectedEvent(event._id);
											}}
										/>
										<LuTrash />
									</a>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}
