import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";

export default function RegisterScreen() {
	const [formData, setFormData] = useState({
		email: "",
		fullname: "",
		phone: "",
		address: "",
	});
    const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = () => {
		const options = {
			method: "POST",
			url: process.env.REACT_APP_API_URL + "/api/user/register",
			headers: {
				"Content-Type": "application/json",
			},
			params: {},
			data: formData,
		};

		const registerUser = async () => {
			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						window.location.href = "/login";
					}
                   
					console.log(result);
				})
				.catch((err) => {
                    const msg = err.response.data.msg;
                    setErrorMessage(msg);
					console.log(msg);
				});
		};

		registerUser();
	};

	return (
		<>
			<section className="min-h-screen">
				<div className="relative w-[100%] min-h-screen flex items-center justify-center text-center">
					<div className={`absolute right-3 top-28 ${errorMessage !== '' ? 'block' : 'hidden'}`}>
						<Toast>
							<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
								<HiExclamation className="h-5 w-5" />
							</div>
							<div className="ml-3 text-xs font-normal">
								{errorMessage}
							</div>
							{/* <Toast.Toggle /> */}
						</Toast>
					</div>
					<form
						className="py-4 px-8 min-h-[400px] max-w-[340px] 
                      bg-white mt-10 mx-auto
                        border border-slate-200 rounded-sm
                        flex flex-col items-center"
					>
						<img className="w-[50%] mb-3" src="logo.png" />
						<input
							className="border border-transparent bg-slate-100 outline-none text-black
                            text-sm leading-5 w-[100%] h-[44px] pl-4 mb-3 focus:ring-0 focus:border-none"
							type="email"
							name="email"
							placeholder="Email"
							onChange={(e) => {
								setFormData({
									...formData,
									email: e.target.value,
								});
							}}
						/>
						<input
							className="border border-transparent bg-slate-100 outline-none text-black
                            text-sm leading-5 w-[100%] h-[44px] pl-4 mb-3 focus:ring-0 focus:border-none"
							type="email"
							name="email"
							placeholder="Fullname"
							onChange={(e) => {
								setFormData({
									...formData,
									fullname: e.target.value,
								});
							}}
						/>
						<input
							className="border border-transparent bg-slate-100 outline-none text-black
                            text-sm leading-5 w-[100%] h-[44px] pl-4 mb-3 focus:ring-0 focus:border-none"
							type="email"
							name="email"
							placeholder="Phone"
							onChange={(e) => {
								setFormData({
									...formData,
									phone: e.target.value,
								});
							}}
						/>
						<input
							className="border border-transparent bg-slate-100 outline-none text-black
                            text-sm leading-5 w-[100%] h-[44px] pl-4 mb-3 focus:ring-0 focus:border-none"
							type="email"
							name="email"
							placeholder="Address"
							onChange={(e) => {
								setFormData({
									...formData,
									address: e.target.value,
								});
							}}
						/>

						<div className="term-box relative mt-4 text-xs text-left w-full">
							<div className="absolute rounded-sm top-[3px] left-[4px] w-[16px] h-[16px] bg-transparent">
								<input
									checked
									type="checkbox"
									name="check"
									className="absolute w-[14px] h-[14px] top-[-4px] left-[-4px]
                                    checked:bg-emerald-300 hover:ring-1 hover:ring-emerald-300"
								/>
								<p className="m-0 top-[-7px] left-[24px] absolute text-black w-[246px]">
									Tôi đồng ý với
									<span className="text-main">
										{" "}
										Điều khoản sử dụng và mua vé{" "}
									</span>
									cho người có độ tuổi phù hợp
								</p>
							</div>
						</div>

						<div className="form-option mt-16">
							<button
								className="bg-slate-200 border-transparent w-[100%] h-[40px] 
                                rounded-full min-w-[270px] text-sm hover:bg-emerald-300"
								type="button"
								onClick={handleSubmit}
							>
								Tiếp tục
							</button>

							<div className="divide-line relative border-t border-slate-100 mt-5 mb-0 mx-0">
								<span
									className="absolute left-[50%] translate-x-[-54%] top-[-10px] px-4
                                    text-gray-500 text-xs"
								>
									Hoặc
								</span>
							</div>

							<div className="flex justify-center items-center text-center">
								<div className="pointer m-2">
									<Link
										className="text-main text-xs"
										to="/login"
									>
										Bạn đã có tài khoản ?
									</Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
