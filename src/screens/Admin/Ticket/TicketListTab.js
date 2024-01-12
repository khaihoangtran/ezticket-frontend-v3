import { useEffect, useState } from 'react';
import EditForm from '../../../components/Admin/EditForm';
import ListTable from '../../../components/Admin/ListTable';
import Collapsible from '../../../components/Admin/Collapsible';
import axios from 'axios';

export default function TicketListTab({ setPage }) {
    const [formData, setFormData] = useState({});

    const [tickets, setTickets] = useState([]);
	const [event, setEvent] = useState({});

    useEffect(() => {
		const selectedEvent = localStorage.getItem('selectedEvent');
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/ticket/group_by_event/${selectedEvent}`,
            headers: {
                'Content-Type': 'application/json',
            },
            params: {},
        };

        const fetchDataEvent = async () => {
            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;

                    if (result.success) {
                        setTickets(result.tickets);
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

    return (
        <>
            <section className="px-6 py-4 mt-[-10px]">
                <div className="flex items-center justify-between mb-10">
                    <div className="grow">
                        <div className="relative pt-2">
                            <h1 className="text-2xl whitespace-nowrap">Danh sách loại vé</h1>
                        </div>
                        <p className="whitespace-nowrap overflow-hidden text-xs text-gray-400 ">API ID: 315F4</p>
                    </div>
                </div>

                <div className="w-full mt-4 bg-gray-50 rounded border border-gray-200">
                    {/* <Collapsible /> */}
                    <ListTable
                        tickets={tickets}
						event={event}
                        headcells={headcells}
						setPage={setPage}
                    />
                </div>
            </section>
        </>
    );
}

const headcells = ['Banner', 'Tên sự kiện', 'Tên vé', 'Giá vé', 'Đã bán', 'Còn lại'];

const inputs = [
    {
        title: 'Tên vé',
        about: 'Tên của loại vé',
        tag: 'name',
    },
    {
        title: 'Giá vé',
        about: 'Giá vé bán ra',
        tag: 'price',
    },
    {
        title: 'Số lượng',
        about: 'Số lượng vé còn lại',
        tag: 'quantity',
    },
];
