import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
export default function SuccessScreen() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token').replaceAll(' ', '+');

        const StoreCheckout = async () => {
            const options = {
                url: `${process.env.REACT_APP_API_URL}/api/checkout/create`,
                method: 'POST',
                data: {
                    token: token,
                },
            };

            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;

                    if (result.success) {
                        // console.log('pass')
                    }

                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        StoreCheckout();
        // console.log(token)
    }, []);

    return (
        <section className="login-main-wrapper">
            <div className="main-container ">
                <div className="login-process">
                    <div className="login-main-container">
                        <div className="thankyou-wrapper min-h-screen">
                            <h1 className="w-full flex items-center justify-center mt-20">
                                <img src="/thankyou.png" alt="thanks" />
                            </h1>
                            <p>Cảm ơn bạn đã sử dụng dịch vụ</p>
                            <Link className="btn" to="/">
                                Về trang chủ
                            </Link>
                            <div className="clr"></div>
                        </div>
                        <div className="clr"></div>
                    </div>
                </div>
                <div className="clr"></div>
            </div>
        </section>
    );
}
