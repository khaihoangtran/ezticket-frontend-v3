import { useEffect, useState } from 'react';
import EditForm from '../../../components/Admin/EditForm';
import axios from 'axios';

export default function UpdateEventTab({ event_id, setIsEditing }) {
    const [formData, setFormData] = useState({});
    const [event, setEvent] = useState(null);
    
    useEffect(() => {
        if (event) {
            setFormData({
                name: event.name,
                categories: event.categories,
                occur_date: event.occur_date,
                time: event.time,
                location: event.location,
                address: event.address,
                introduce: event.introduce,
                banner: event.banner,
                status: event.status
            });
        }

        // console.log(event)
    }, [event]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/event/detail/${event_id}`,
        };

        const fetchDataEvent = async () => {
            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;

                    if (result.success) {
                        setEvent(result.event);
                    }

                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetchDataEvent();
    }, []);

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <>
            <section className="px-6 py-4 mt-[-10px]">
                <div className="flex items-center justify-between mb-10">
                    <div className="grow">
                        <div className="relative pt-2">
                            <h1 className="text-2xl whitespace-nowrap">Cập nhật sự kiện</h1>
                        </div>
                        <p className="whitespace-nowrap overflow-hidden text-xs text-gray-400 ">API ID: 315F4</p>
                    </div>

                    <div className="pt-4 flex flex-row gap-3">
                        <button
                            onClick={() => {
                                setIsEditing(false);
                            }}
                            className="bg-gray-200 text-sm min-w-32 px-4 py-1"
                        >
                            Trở lại
                        </button>
                        <button
                            onClick={() => {
                                setIsEditing(false);
                                handleSubmit();
                            }}
                            className="text-sm bg-main min-w-32 px-4 py-1"
                        >
                            Lưu
                        </button>
                    </div>
                </div>
                {formData && (
                    <EditForm
                        ckeditor={['Giới thiệu về sự kiện','introduce']}
                        uploadbox={['Banner sự kiện', 'banner']}
                        formData={formData}
                        setFormData={setFormData}
                        inputs={inputs}
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
