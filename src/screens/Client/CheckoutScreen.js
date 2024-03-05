import { useEffect, useState } from 'react';
import { Banner } from '../../components/Client';
import { Link, useParams } from 'react-router-dom';
import CustomerInfo from '../../components/Client/CustomerInfo';
import axios from 'axios';
import { Toast, Spinner } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';
import { checkAuth } from '../../utils';

export default function CheckoutScreen() {
	useEffect(() => {
		const checkAuthAsync = async () => {
			const isAuth = await checkAuth();

			if (!isAuth) {
				localStorage.clear();
				window.location.href = '/login';
			}
		};

		checkAuthAsync();
	}, []);

	const [user, setUser] = useState(() => {
		const userJson = localStorage.getItem('user');
		return userJson ? JSON.parse(userJson) : null;
	});

	const [errorMessage, setErrorMessage] = useState('');
	const { event_slug, booking_id } = useParams();
	const [isCreatePayment, setIsCreatePayment] = useState(false);

	const [event, setEvent] = useState(null);
	const [booking, setBooking] = useState(null);

	useEffect(() => {
		if (!user) {
			window.location.href = '/login';
		}

		const fetchDataEvent = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/event/view/${event_slug}`,
				method: 'GET',
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						// console.log(result.event);
						setEvent({ ...result.event });
					}

					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		const fetchDataBooking = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/booking/detail/${booking_id}`,
				method: 'GET',
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						setBooking(result.booking);
					}

					console.log(result);
				})
				.catch((err) => {
					window.location.href = '/';
					console.log(err);
				});
		};

		fetchDataEvent();
		fetchDataBooking();
	}, []);

	const handleCheckout = () => {
		setIsCreatePayment(true);
		const Checkout = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/checkout/access_payment`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					event_id: event._id,
					booking_id: booking_id,
					total: booking.temporary_cost * 1.06,
					owner: user._id,
				},
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						window.open(result.session_url, '_blank');
					} else {
						if (result.is_paid) {
							alert(result.msg);
							window.location.href = '/';
						}
					}

					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setTimeout(() => {
						setIsCreatePayment(false);
					}, 1000);
				});
		};

		Checkout();
	};

	const handleCancelBooking = () => {
		const CancelBooking = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/booking/cancel/${booking_id}`,
				method: 'PUT',
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						alert('Đơn hàng đã hủy');
						window.location.href = `/event/${event_slug}/booking`;
					}

					console.log(result);
				})
				.catch((err) => {
					alert(err.response.data.msg);
					window.location.href = `/event/${event_slug}/booking`;
					console.log(err);
				});
		};

		CancelBooking();
	};

	const [timeRemaining, setTimeRemaining] = useState(600);

	useEffect(() => {
		if (timeRemaining > 0) {
			const timerId = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);

			// console.log(timeRemaining)
			// Cleanup the interval when the component is unmounted or when timeRemaining reaches 0
			return () => clearInterval(timerId);
		} else {
			handleCancelBooking();
		}
	}, [timeRemaining]);

	return (
		<>
			{event && (
				<section className="mt-[6.5rem] min-h-screen">
					<Banner event={event} />

					<div className="booking-container w-[65%] mx-auto">
						<div className="grid grid-cols-6 gap-4 my-5">
							{/* Stage 2 */}
							<>
								<div className="desktop:col-span-4 laptop:col-span-3 col-span-6 self-start rounded">
									<div className="flex flex-col  gap-4 bg-zinc-800 p-4 min-h-[150px]">
										<div className="border-b border-emerald-300 flex items-center justify-between">
											<div className="text-md font-medium text-emerald-300 py-2">Thông tin đặt vé</div>
											<button onClick={handleCancelBooking} className="text-xs text-red-400">
												Chọn lại vé
											</button>
										</div>

										<div className="w-full flex flex-row items-center justify-between">
											<table className="table w-[100%]">
												<tbody>
													{booking &&
														booking.tickets.map((tp, index) => {
															return (
																<tr key={index} className="table-row">
																	<td className="text-sm font-base p-1">
																		{tp.ticket_type.ticket_name} <br />{' '}
																		{tp.price.toLocaleString('vi-vn')}đ
																	</td>
																	<td className="text-sm text-right">
																		x{tp.qty} <br /> {(tp.price * tp.qty).toLocaleString('vi-vn')}đ
																	</td>
																</tr>
															);
														})}
												</tbody>
											</table>
										</div>
									</div>

									<div className="flex items-center justify-center gap-2 bg-gray-200 p-4 rounded mt-5">
										<HiExclamation className="text-black-500" />
										<p className="text-sm text-black-500 font-medium">
											Lưu ý kiểm tra thông tin nhận vé trước khi thanh toán.
										</p>
									</div>

									<div className="flex flex-col items-center justify-center gap-4 bg-zinc-800 p-4 mt-5 min-h-[150px]">
										<div>Giao dịch sẽ hết hạn sau</div>
										<div className="flex flex-row items-center justify-center gap-4">
											<div className="w-10 h-10 bg-gray-200 flex items-center justify-center">
												<p className="text-sm text-black-500 font-medium">
													{parseInt(timeRemaining / 60) < 10
														? '0' + parseInt(timeRemaining / 60)
														: parseInt(timeRemaining / 60)}
												</p>
											</div>
											<div className="w-10 h-10 bg-gray-200 flex items-center justify-center">
												<p className="text-sm text-black-500 font-medium">
													{parseInt(timeRemaining % 60) < 10
														? '0' + parseInt(timeRemaining % 60)
														: parseInt(timeRemaining % 60)}
												</p>
											</div>
										</div>
									</div>
								</div>
							</>

							<div className="relative desktop:col-span-2 laptop:col-span-3 col-span-6 w-[100%]">
								<div className="w-[100%] px-4 py-4 bg-zinc-800">
									<div className="w-[100%] pb-3">
										<CustomerInfo user={user} />
									</div>
								</div>

								<div className="w-full bg-gray-200 font-medium text-slate-700  flex flex-col justify-between ">
									{booking && (
										<>
											<div className="px-4 h-10 flex flex-row items-center justify-between">
												<span className="text-sm">Tạm tính</span>
												<span className="text-sm">
													{booking.temporary_cost.toLocaleString('vi-vn') || 0}đ
												</span>
											</div>
											<div className="px-4 h-10 flex flex-row items-center justify-between">
												<span className="text-sm">Thuế VAT</span>
												<span className="text-sm">
													{(booking.temporary_cost * 0.06).toLocaleString('vi-vn')}đ
												</span>
											</div>
											<div className="px-4 h-10 flex flex-row items-center justify-between">
												<span className="text-sm">Tổng cộng</span>
												<span className="text-sm">
													{(booking.temporary_cost * 1.06).toLocaleString('vi-vn')}đ
												</span>
											</div>
										</>
									)}
								</div>

								<button
									onClick={() => {
										handleCheckout();
									}}
									className="absolute bg-main py-3 text-center rounded w-[100%] mt-5"
								>
									{isCreatePayment ? <Spinner color="success" /> : 'Thanh toán'}
								</button>
							</div>
						</div>
					</div>
				</section>
			)}

			<div className={`fixed right-3 bottom-5 ${errorMessage !== '' ? 'block' : 'hidden'}`}>
				<Toast>
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
						<HiExclamation className="h-5 w-5" />
					</div>
					<div className="ml-3 text-xs font-normal">{errorMessage}</div>
					{/* <Toast.Toggle /> */}
				</Toast>
			</div>
		</>
	);
}
