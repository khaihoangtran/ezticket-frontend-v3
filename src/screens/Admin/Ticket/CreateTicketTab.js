import { useEffect, useState } from 'react';
import EditForm from '../../../components/Form/EditForm';
import { Spinner } from 'flowbite-react';
import axios from 'axios';

export default function CreateEventTab() {
    const [user, setUser] = useState(() => {
        const userJson = localStorage.getItem('user');
        return userJson ? JSON.parse(userJson) : null;
    });

    const [formData, setFormData] = useState({
        event: '',
        ticket_name: '',
        price: 0
    });

    const [isSubmiting, setIsSubmiting] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchDataCategories = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/category/all`)
                .then((response) => {
                    const result = response.data;

                    if (result.success) {
                        setCategories(result.categories);
                        setFormData({ ...formData, category: result.categories[0]._id });
                    }

                    // console.log(result.categories);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetchDataCategories();
    }, []);

    const handleSubmit = () => {
        setIsSubmiting(true);
        var formDataToSend = new FormData();
        formDataToSend.append('author', user?._id);
        for (let key in formData) {
            if (formData.hasOwnProperty(key)) {
                formDataToSend.append(key, formData[key]);
            }
        }

        console.log(formData);

        const createEvent = async () => {
            const options = {
                url: `${process.env.REACT_APP_API_URL}/api/event/create`,
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                params: {},
                data: formDataToSend,
            };

            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;

                    if (result.success) {
                        setTimeout(() => {
                            window.location.href = '/business/event';
                        }, 2000);
                    }

                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setTimeout(() => {
                        setIsSubmiting(false);
                    }, 2000);
                });
        };

        createEvent();
    };

    return (
        <>
            <section className="px-6 py-4 mt-[-10px]">
                <div className="flex items-center justify-between mb-10">
                    <div className="grow">
                        <div className="relative pt-2">
                            <h1 className="text-2xl whitespace-nowrap">Tạo sự kiện</h1>
                        </div>
                        <p className="whitespace-nowrap overflow-hidden text-xs text-gray-400 ">API ID: 315F4</p>
                    </div>

                    <div className="pt-4 flex flex-row gap-3">
                        <button disabled className="bg-gray-200 text-sm min-w-32 px-4 py-1 cursor-not-allowed">
                            Trở lại
                        </button>
                        <button
                            onClick={() => {
                                handleSubmit();
                            }}
                            className="text-sm bg-main min-w-32 px-4 py-1"
                        >
                            {isSubmiting ? <Spinner color="success" aria-label="Success spinner example" /> : 'Lưu'}
                        </button>
                    </div>
                </div>
                <EditForm
                    inputs={inputs}
                    data={formData}
                    setData={setFormData}
                    editstate={true}
                    categories={categories}
                />
            </section>
        </>
    );
}

const inputs = [
    {
        title: 'Tên sự kiện',
        about: 'Tên của sự kiện muốn tổ chức',
        tag: 'event_name',
        type: 'text',
    },
    {
        title: 'Thể loại',
        about: 'Thể loại mà sự kiện hướng đến',
        tag: 'category',
        type: 'select',
    },
    {
        title: 'Ngày diễn ra',
        about: 'Ngày mà sự kiện diễn ra',
        tag: 'occur_date',
        type: 'date',
    },
    {
        title: 'Thời gian',
        about: 'Khung thời gian sự kiện diễn ra',
        tag: 'time',
        type: 'text',
    },
    {
        title: 'Địa điểm',
        about: 'Nơi sự kiện diễn ra',
        tag: 'location',
        type: 'text',
    },
    {
        title: 'Địa chỉ',
        about: 'Địa chỉ của nơi diễn ra sự kiện',
        tag: 'address',
        type: 'text',
    },
    {
        title: 'Banner sự kiện',
        tag: 'banner',
        type: 'file',
    },
    {
        title: 'Giới thiệu sự kiện',
        tag: 'introduce',
        type: 'textarea',
    },
];
