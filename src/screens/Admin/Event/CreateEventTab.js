import { useEffect, useState } from 'react';
import EditForm from '../../../components/Admin/EditForm';
import axios from 'axios';
import { Spinner } from 'flowbite-react';

export default function CreateEventTab({ event_id, setIsEditing }) {
	const [isSubmiting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchDataCategories = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/category/all`)
                .then((response) => {
                    const result = response.data;

                    if (result.success) {
                        setCategories(result.categories);
                    }

                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetchDataCategories();
    }, []);

    const handleSubmit = () => {
		setIsSubmitting(true);
        var formDataToSend = new FormData();
        for (let key in formData) {
            if (formData.hasOwnProperty(key)) {
                formDataToSend.append(key, formData[key]);
            }
        }

		console.log(formData)

        const UpdateEvent = async () => {
            const options = {
                method: 'PUT',
                url: `${process.env.REACT_APP_API_URL}/api/event/update/${event_id}`,
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
							window.location.href = '/business'
						}, 2000)
                    }

                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

		UpdateEvent();

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
                        <button
                            onClick={() => {
                                setIsEditing(false);
                            }}
							disabled
                            className="bg-gray-200 text-sm min-w-32 px-4 py-1 cursor-not-allowed"
                        >
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
                {formData && (
                    <EditForm
                        ckeditor={['Giới thiệu về sự kiện', 'introduce']}
                        uploadbox={['Banner sự kiện', 'banner']}
                        formData={formData}
                        setFormData={setFormData}
                        inputs={inputs}
                        categories={categories}
						editstate={true}
                    />
                )}
            </section>
        </>
    );
}

const inputs = [
    {
        title: 'Tên sự kiện',
        about: 'Tên của sự kiện muốn tổ chức',
        tag: 'name',
        type: 'text',
    },
    {
        title: 'Thể loại',
        about: 'Thể loại mà sự kiện hướng đến',
        tag: 'categories',
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
];
