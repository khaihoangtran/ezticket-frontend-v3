import { Sidebar, CustomFlowbiteTheme } from 'flowbite-react';
import { useState } from 'react';
import { HiArchive, HiInbox, HiLockClosed, HiLogout, HiShare, HiTicket, HiViewBoards } from 'react-icons/hi';
import { MdDashboard, MdMonitor } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function BusinessSideNav() {
    const [navActive, setNavActive] = useState(1);
    // console.log(navActive)
    return (
        <Sidebar theme={customTheme}>
            <Sidebar.Logo href="#" img={process.env.REACT_APP_LOGO_URL} imgAlt="EzTicket logo">
                EzTicket
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={MdMonitor}>
                        Trang chủ
                    </Sidebar.Item>
                    <Sidebar.Item className={navActive === 1 && 'bg-main'} href="#" icon={MdDashboard}>
                        <Link
                            onClick={() => {
                                setNavActive(1);
                            }}
                            className="w-full block"
                            to="/business"
                        >
                            Dashboard
                        </Link>
                    </Sidebar.Item>

                    <Sidebar.Item className={navActive === 2 && 'bg-main'} href="#" icon={HiInbox}>
                        <Link
                            onClick={() => {
                                setNavActive(2);
                            }}
                            className="w-full block"
                            to="/business/info"
                        >
                            Thông tin tổ chức
                        </Link>
                    </Sidebar.Item>

                    <Sidebar.Item className={navActive === 3 && 'bg-main'} href="#" icon={HiViewBoards}>
                        <Link
                            onClick={() => {
                                setNavActive(3);
                            }}
                            className="w-full block"
                            to="/business/event"
                        >
                            Sự kiện
                        </Link>
                    </Sidebar.Item>

                    <Sidebar.Item className={navActive === 4 && 'bg-main'} href="#" icon={HiTicket}>
                        <Link
                            onClick={() => {
                                setNavActive(4);
                            }}
                            className="w-full block"
                            to="/business/ticket"
                        >
                            Vé vào cổng
                        </Link>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArchive}>
                        Quyền lợi
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiLockClosed}>
                        Chính sách
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShare}>
                        Dịch vụ
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiLogout}>
                        Đăng xuất
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

const customTheme = {
    root: {
        base: 'h-full',
        collapsed: {
            on: 'w-16',
            off: 'w-64',
        },
        inner: 'h-full overflow-y-auto overflow-x-hidden bg-gray-50 py-4 px-3 dark:bg-gray-800',
    },
    logo: {
        base: 'mb-5 flex items-center pl-2.5',
        collapsed: {
            on: 'hidden',
            off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
        },
        img: 'mr-4 h-12 w-12',
    },
};
