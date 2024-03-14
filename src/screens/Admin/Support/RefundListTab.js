import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';
import { HiDownload } from 'react-icons/hi';
const headcells = ['Mã đơn hàng', 'Khách hàng', 'Lý do', 'Ngày tạo', 'Đính kèm', 'Tình trạng'];

export default function RefundListTab({}) {
	const [refunds, setRefunds] = useState([]);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const FetchDataRefunds = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/refund/search?status=pending`,
				method: 'GET',
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						setRefunds(result.refunds);
					}

					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		FetchDataRefunds();
	}, [counter]);

	const handleClickAprove = (refund_id) => {
		const ApproveRefund = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/admin/prove_refund/${refund_id}/true`,
				method: 'PUT',
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						setCounter((prev) => prev + 1);
					}

					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		ApproveRefund();
	};

	const handleClickRefuse = (refund_id) => {
		const DisproveRefund = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/admin/prove_refund/${refund_id}/false`,
				method: 'PUT',
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						setCounter((prev) => prev + 1);
					}

					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		DisproveRefund();
	};

	return (
		<>
			<section className="px-6 py-4 mt-[-10px]">
				<div className="flex items-center justify-between mb-10">
					<div className="grow">
						<div className="relative pt-2">
							<h1 className="text-2xl whitespace-nowrap">Danh sách yêu cầu</h1>
						</div>
						<p className="whitespace-nowrap overflow-hidden text-xs text-gray-400 ">API ID: 315F4</p>
					</div>
				</div>

				<div className="overflow-x-auto">
					{refunds.length !== 0 ? (
						<Table hoverable>
							<Table.Head>
								{/* <Table.HeadCell className="p-4"></Table.HeadCell> */}

								{headcells.map((cell, index) => {
									return <Table.HeadCell key={index}>{cell}</Table.HeadCell>;
								})}
							</Table.Head>
							<Table.Body className="divide-y">
								{refunds.map((refund, index) => {
									return (
										<Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
											<Table.Cell className="text-xs">{refund.booking.trade_code}</Table.Cell>
											<Table.Cell className="text-xs">
												{refund.customer.fullname} <br /> {refund.customer.email} <br />{' '}
												{refund.customer.phone}
											</Table.Cell>

											<Table.Cell className={`text-xs max-w-[50rem]`}>{refund.reason}</Table.Cell>
											<Table.Cell className="text-xs">
												{new Date(refund.createdAt).toLocaleDateString('vi-vn')}
											</Table.Cell>

											<Table.Cell>
												<a
													href={refund.attach}
													download
													target="_blank"
													rel="noopener noreferrer"
													className="flex flex-row ml-4 text-xs font-medium text-cyan-600 hover:underline dark:text-cyan-500"
												>
													<HiDownload size={20} title="Tải xuống giấy phép" />

													{/* <HiTrash title="Xóa sự kiện" size={20} /> */}
												</a>
											</Table.Cell>
											<Table.Cell
												className={`text-xs space-x-3 ${
													refund.status === 'approved' ? `text-main` : `text-rose-500`
												}`}
											>
												{refund.status === 'pending' ? (
													<>
														<button
															onClick={() => {
																handleClickAprove(refund._id);
															}}
															className="btn bg-main"
														>
															Chấp thuận
														</button>
														<button
															onClick={() => {
																handleClickRefuse(refund._id);
															}}
															style={{ background: '#314133' }}
															className="btn "
														>
															Từ chối
														</button>
													</>
												) : (
													<div>{refund.status}</div>
												)}
											</Table.Cell>
										</Table.Row>
									);
								})}
							</Table.Body>
						</Table>
					) : (
						<div className="w-full h-[50dvh] flex items-center justify-center">
							<h2>Tạm thời không có yêu cầu hoản tiền nào</h2>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
