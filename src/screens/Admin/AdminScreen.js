import React, { useEffect, useState } from 'react';
import MenuTab from '../../components/Admin/MenuTab';
import { MdAddBox, MdDashboard, MdList, MdOutlineCrop, MdRule, MdSettings } from 'react-icons/md';
import ApproveListTab from './Support/ApproveListTab';
import DashboardTab from './Dashboard/DashboardTab';
import RefundListTab from './Support/RefundListTab';


const AdminScreen = ({ page }) => {
    
    return (
        <section className='bg-gray-50'>
            <section className="flex-shrink-0">
                <MenuTab list={menu[page]} />
            </section>
        </section>
    );
};

const menu = {
	// ADMIN Tabs
	"Dashboard": [
		{
			tab: "Dashboard",
			icon: MdDashboard,
			content: <DashboardTab />,
		}
	],
	"AproveList": [
		{
			tab: "Danh sách phê duyệt",
			icon: MdList,
			content: <ApproveListTab />,
		}
	],
	"Help": [

	],
    "Refund": [
		{
			tab: "Danh sách yêu cầu",
			icon: MdList,
			content: <RefundListTab />,
		}
    ],

};


export default AdminScreen;