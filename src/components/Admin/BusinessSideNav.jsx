import { Sidebar, CustomFlowbiteTheme } from 'flowbite-react';
import { HiArchive, HiInbox, HiLockClosed, HiLockOpen, HiLogout, HiShare, HiTicket, HiViewBoards } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

export default function BusinessSideNav({ setPage }) {
    return (
        <Sidebar theme={customTheme}>
            <Sidebar.Logo href="#" img={process.env.REACT_APP_LOGO_URL} imgAlt="EzTicket logo">
                EzTicket
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        // onClick={() => {
                        //     setPage('Trang chủ');
                        // }}
                        href="/"
                        icon={MdDashboard}
                    >
                        Trang chủ
                    </Sidebar.Item>

                    <Sidebar.Item
                        onClick={() => {
                            setPage('Tổ chức');
                        }}
                        href="#"
                        icon={HiInbox}
                    >
                        Thông tin tổ chức
                    </Sidebar.Item>

                    <Sidebar.Item
                        onClick={() => {
                            setPage('Sự kiện');
                        }}
                        href="#"
                        icon={HiViewBoards}
                    >
                        Sự kiện
                    </Sidebar.Item>

                    <Sidebar.Item
						className="hidden"
                        onClick={() => {
                            setPage('Vé');
                        }}
						href="#"
                        icon={HiTicket}
                    >
                        Vé vào cổng
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
