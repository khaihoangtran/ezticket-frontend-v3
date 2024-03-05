import React, { useEffect, useState } from 'react';
import MenuTab from '../../components/Admin/MenuTab';
import { MdAddBox, MdDashboard, MdList, MdOutlineCrop, MdRule, MdSettings } from 'react-icons/md';
import DashboardTab from './Dashboard/DashboardTab';
import CreateEventTab from './Event/CreateEventTab';
import UpdateBusinessTab from './Business/UpdateBusinessTab';
import EventListTab from './Event/EventListTab';
import TicketListTab from './Ticket/TicketListTab';


const BusinessScreen = ({ page }) => {
    
    return (
        <section className='bg-gray-50'>
            <section className="flex-shrink-0">
                <MenuTab list={menu[page]} />
            </section>
        </section>
    );
};

const menu = {
	"Dashboard": [
		{
			tab: "Dashboard",
			icon: MdDashboard,
			content: <DashboardTab />,
		},
		{
			tab: "Chỉnh sửa",
			icon: MdSettings,
			content: <CreateEventTab />,
		},
	],
	"Tổ chức": [
		{
			tab: "Cập nhật",
			icon: MdSettings,
			content: <UpdateBusinessTab />,
		},
		{
			tab: "Điều khoản",
			icon: MdRule,
			content: "",
		},
	],
	"Sự kiện": [
		{
			tab: "Danh sách sự kiện",
			icon: MdList,
			content: <EventListTab  />,
		},
		{
			tab: "Tạo mới",
			icon: MdAddBox,
			content: <CreateEventTab  />,
		},
		{
			tab: "Hướng dẫn",
			icon: MdOutlineCrop,
			content: "",
		},
	],
	"Vé": [
		{
			tab: "Danh sách vé",
			icon: MdList,
			content: <TicketListTab  />,
		},
		{
			tab: "Tạo mới",
			icon: MdAddBox,
			content: "",
		},
		{
			tab: "Hướng dẫn",
			icon: MdOutlineCrop,
			content: "",
		},
	],

	// ADMIN Tabs
	"ProveEvent": [
		{
			tab: "Danh sách sự kiện",
			icon: MdList,
			content: <EventListTab  />,
		}
	],
	"Help": [

	],

};



export default BusinessScreen;
