import { Link } from "react-router-dom";

export default function LoginScreen() {
	return (
		<>
			<section className="min-h-screen">
				<div className="w-[100%] min-h-screen flex items-center justify-center text-center">
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
						/>

						<div className="term-box relative mt-4 text-xs text-left w-full">
							<div className="absolute rounded-sm top-[3px] left-[4px] w-[16px] h-[16px] bg-transparent">
								<input checked
									type="checkbox"
									name="check"
									className="absolute w-[14px] h-[14px] top-[-4px] left-[-4px]
                                    checked:bg-emerald-300 hover:ring-1 hover:ring-emerald-300"
								/>
                                <p className="m-0 top-[-7px] left-[24px] absolute text-black w-[246px]">
                                    Tôi đồng ý với
                                    <span className="text-emerald-300"> Điều khoản sử dụng và mua vé </span>
                                    cho người có độ tuổi phù hợp
                                </p>
							</div>
						</div>

                        <div className="form-option mt-16">
                            <button 
                                className="bg-slate-200 border-transparent w-[100%] h-[40px] 
                                rounded-full min-w-[270px] text-sm hover:bg-emerald-300" 
                                type="button"
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
                                    <Link className="text-emerald-300 text-xs" to="/register">
                                        Bạn chưa có tài khoản ?
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
