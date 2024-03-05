import React, { useEffect, useState } from 'react';
import MenuTab from '../../components/Admin/MenuTab';
import { MdAddBox, MdDashboard, MdList, MdOutlineCrop, MdRule, MdSettings } from 'react-icons/md';
import DashboardTab from './Dashboard/DashboardTab';
import CreateEventTab from './Event/CreateEventTab';
import UpdateBusinessTab from './Business/UpdateBusinessTab';
import EventListTab from './Event/EventListTab';
import TicketListTab from './Ticket/TicketListTab';


const AdminScreen = ({ page }) => {
    
    return (
        <section className='bg-gray-50'>
            <section className="flex-shrink-0">
                {/* <MenuTab list={menu[page]} /> */}
            </section>
        </section>
    );
};

const menu = {
	// ADMIN Tabs
	"ProveEvent": [
		{
			tab: "Danh sách sự kiện",
			icon: MdList,
			
		}
	],
	"Help": [

	],
    "Refund": [

    ],

};


export default AdminScreen;