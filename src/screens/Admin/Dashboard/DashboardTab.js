import { useState } from 'react';
import EditForm from '../../../components/Form/EditForm';

export default function DashboardTab() {
    const [data, setData] = useState({
        name: '',
        occur_date: '',
        categories: '3148149138',
        time: '',
        location: '',
        introduce: 'feqfeq',
    });

    return (
        <>
            <section className="px-6 py-4 mt-[-10px]">
                <div className="flex items-center justify-center text-center h-[90dvh]">
                    <img src='/rate-limit.png' />
                </div>
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
        options: [
            {
                value: '3148149138',
                name: 'Concert',
            },
            {
                value: '4238149138',
                name: 'Sân khấu',
            },
        ],
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
