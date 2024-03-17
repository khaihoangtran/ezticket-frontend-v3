import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { Toast } from "flowbite-react";
import { HiExclamation, HiArrowLeft } from "react-icons/hi";

export default function OTPScreen() {
	const navigate = useNavigate();
    const [otp, setOTP] = useState(["", "", "", ""]);
	const inputRef1 = useRef(null);
	const inputRef2 = useRef(null);
	const inputRef3 = useRef(null);
	const inputRef4 = useRef(null);

	const handleInputChange = (e, index, ref) => {
		const value = e.target.value;

        const updatedOTP = [...otp];
		updatedOTP[index] = value;
		setOTP(updatedOTP);

		if (value.length === 1 && ref.current) {
			ref.current.focus();
		}
	};

	const handleBackspace = (e, index, previousRef) => {
		if (e.key === "Backspace" && e.target.value === '' && previousRef) {
            previousRef.current.focus();
        }
	};

	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async () => {
		const options = {
			method: "POST",
			url: process.env.REACT_APP_API_URL + "/api/user/confirm_otp",
			headers: {
				"Content-Type": "application/json",
			},
			params: {},
			data: {
                email: localStorage.getItem('email'),
                code: otp.join('')
            }
		};

		console.log(options)

        const ConfirmOTP = async () => {
            await axios.request(options)
                .then(response => {
                    let result = response.data;

                    if(result.success) {
                        localStorage.removeItem('email');
                        localStorage.setItem('user', JSON.stringify(result.user));
                        localStorage.setItem('accessToken', result.accessToken);
                        navigate('/');
                    }

                    console.log(result);
                })
                .catch(err => {
                    const msg = err.response.data.msg;
                    setErrorMessage(msg);
                    console.log(err);
                })
        }

        ConfirmOTP();

		// console.log(options)
	};

	return (
		<>
			<section className="min-h-screen">
				<div className="relative w-[100%] min-h-screen flex items-center justify-center text-center">
					<div
						className={`absolute right-3 top-28 ${
							errorMessage !== "" ? "block" : "hidden"
						}`}
					>
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
						className="relative py-4 px-8 min-h-[400px] max-w-[340px] 
                      bg-white mt-10 mx-auto
                        border border-slate-200 rounded-sm
                        flex flex-col items-center"
					>
                        <Link to="/login" className="absolute top-3 left-3">
                            <HiArrowLeft color="black" size={22} />
                        </Link>
						<img className="w-[50%] mb-3" src="logo.png" />

						<h2 className="text-gray-500 text-sm mb-3">
							Two Factors Authentication
						</h2>

						<div className="flex flex-row items-center justify-between gap-3 mt-5">
							<input
								className="border border-transparent bg-slate-100 outline-none text-black text-center
                                text-base font-medium leading-5 w-12 h-12 mb-3 focus:ring-0 focus:border-none"
								type="text"
								name="code"
								ref={inputRef1}
								maxLength="1"
                                pattern="\d"
								onChange={(e) =>
									handleInputChange(e, 0, inputRef2)
								}
								onKeyDown={(e) => handleBackspace(e, 0, inputRef1)}
							/>
							<input
								className="border border-transparent bg-slate-100 outline-none text-black text-center
                                text-base font-medium leading-5 w-12 h-12 mb-3 focus:ring-0 focus:border-none"
								type="text"
								name="code"
								ref={inputRef2}
								maxLength="1"
                                pattern="\d"
								onChange={(e) =>
									handleInputChange(e, 1, inputRef3)
								}
								onKeyDown={(e) => handleBackspace(e, 1, inputRef1)}
							/>
							<input
								className="border border-transparent bg-slate-100 outline-none text-black text-center
                                text-base font-medium leading-5 w-12 h-12 mb-3 focus:ring-0 focus:border-none"
								type="text"
								name="code"
                                ref={inputRef3}
								maxLength="1"
                                pattern="\d"
								onChange={(e) =>
									handleInputChange(e, 2, inputRef4)
								}
								onKeyDown={(e) => handleBackspace(e, 2, inputRef2)}
							/>
							<input
								className="border border-transparent bg-slate-100 outline-none text-black text-center
                                text-base font-medium leading-5 w-12 h-12 mb-3 focus:ring-0 focus:border-none"
								type="text"
								name="code"
                                ref={inputRef4}
								maxLength="1"
                                pattern="\d"
								onChange={(e) =>
									handleInputChange(e, 3, inputRef4)
								}
								onKeyDown={(e) => handleBackspace(e, 3, inputRef3)}
							/>
						</div>

						<div className="form-option mt-7">
							<button
								className="bg-slate-200 border-transparent w-[100%] h-[40px] 
                                rounded-full min-w-[270px] text-sm hover:bg-emerald-300"
								type="button"
								onClick={handleSubmit}
							>
								Tiếp tục
							</button>

							<div className="text-xs text-gray-500 mt-5">
								Vui lòng kiểm tra email để nhận mã OTP
							</div>

							<div className="flex justify-center items-center text-center">
								<div className="pointer m-2">
									<div className="text-main text-xs cursor-pointer">
										Gửi lại ?
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
