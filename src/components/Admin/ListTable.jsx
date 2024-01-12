import { Checkbox, Table } from "flowbite-react";
import {  LuFileEdit, LuTicket, LuTrash } from "react-icons/lu";
import Collapsible from "./Collapsible";

export default function ListTable({ setIsEditing, headcells, events, tickets, event, setSelectedEvent, setPage }) {
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
					{events && events.map((event, index) => {
						return (
							<Table.Row
								key={index}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="p-4">
									<Checkbox />
								</Table.Cell>

								<Table.Cell className="text-sm">
									<img
										onClick={() => {
											setPage("Sự kiện")
										}}
										className="cursor-pounter max-w-48"
										src={event.banner}
									/>
								</Table.Cell>

								<Table.Cell className="text-sm" >{event.name}</Table.Cell>
								<Table.Cell className="text-sm" >{new Date(event.occur_date).toLocaleDateString('vi-vn')} <br /> {event.time}</Table.Cell>
								<Table.Cell className="text-sm" >{event.location} <br/> {event.address}</Table.Cell>
								<Table.Cell className={`text-sm ${event.status === 'published' && 'text-main'}`} >{event.status}</Table.Cell>

								<Table.Cell>
									<a
										href="#"
										className="flex flex-row gap-2 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
									>
										<LuTicket size={20} title="Thông tin vé" onClick={() => {
											setPage('Vé');
											localStorage.setItem('selectedEvent', event._id)
										}} />
										<LuFileEdit 
											title="Cập nhật sự kiện"
											size={20}
											onClick={() => {
												setIsEditing(true);
												setSelectedEvent(event._id);
											}}
										/>
										<LuTrash title="Xóa sự kiện" size={20} />
									</a>
								</Table.Cell>
							</Table.Row>
						);
					})}

					{tickets && event && tickets.map((ticket, index) => {
						return (
							<Table.Row
								key={index}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="p-4">
									<Checkbox />
								</Table.Cell>

								<Table.Cell className="text-sm">
									<img
										onClick={() => {
											setPage("Sự kiện")
										}}
										className="cursor-pointer max-w-48"
										src={event.banner}
									/>
								</Table.Cell>

								<Table.Cell className="text-sm" >{event.name}</Table.Cell>
								<Table.Cell className="text-sm" >{ticket._id}</Table.Cell>
								<Table.Cell className="text-sm" >{ticket.statuses[0].price.toLocaleString('vi-vn')}đ</Table.Cell>
								<Table.Cell className="text-sm" >{ticket.statuses[0] ? ticket.statuses[0].count : 0}</Table.Cell>
								<Table.Cell className="text-sm" >{ticket.statuses[1] ? ticket.statuses[1].count : 0}</Table.Cell>

								<Table.Cell>
									<a
										href="#"
										className="flex flex-row gap-2 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
									>
										
										
										<LuTrash title="Xóa sự kiện" size={20} />
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
