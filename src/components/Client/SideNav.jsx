import React from "react";
import Categories from "./Categories";

const categories = [
    {
        title: 'Trang chủ',
        icon: 'https://i.imgur.com/NRKmnDM.png',
        link: '/'
    },
    {
        title: 'Concert nhạc',
        icon: 'https://i.imgur.com/YyXHyXv.png',
        link: '/events/nhac-song'
    },
    {
        title: 'Sân khấu nghệ thuật',
        icon: 'https://i.imgur.com/ljaLmnS.png',
        link: '/events/san-khau-nghe-thuat'
    },
    {
        title: 'Khoa học - diễn thuyết',
        icon: 'https://i.imgur.com/fX2KeYU.png',
        link: '/events/khoa-hoc-dien-thuyet'
    },
    {
        title: 'Du lịch - khám phá',
        icon: 'https://i.imgur.com/7xTWoNU.png',
        link: '/events/du-lich-kham-pha'
    },
    {
        title: 'Thể dục thể thao',
        icon: 'https://i.imgur.com/Cd7cKEl.png',
        link: '/events/the-duc-the-thao'
    },
    {
        title: 'Hội nghị - triễn lãm',
        icon: 'https://i.imgur.com/l60bw3u.png',
        link: '/events/hoi-nghi-trien-lam'

    },
    {
        title: 'Sự kiện tại TP. Hồ Chí Minh',
        icon: 'https://cdn02.ticketbox.vn/poster/9dc655de-c68a-11ea-98a5-0242ac110008'
    },
    {
        title: 'Sự kiện tại Hà Nội',
        icon: 'https://cdn02.ticketbox.vn/poster/8fa8f509-c68a-11ea-98a5-0242ac110008'
    },
];

const policies = [
    {
        title: 'Về chúng tôi',
        icon: 'https://i.imgur.com/idHw5Pv.png'
    },
    {
        title: 'Dành cho nhà tổ chức',
        icon: 'https://i.imgur.com/wRIxZN4.png'
    },
    {
        title: 'Câu hỏi thường gặp',
        icon: 'https://i.imgur.com/ce8gXK3.png'
    },
    {
        title: 'Chính sách bảo mật',
        icon: 'https://cdn02.ticketbox.vn/poster/5d942c7c-6623-11ed-825b-0242ac110003'
    },
    {
        title: 'Chính sách đổi trả và kiểm hàng',
        icon: 'https://cdn02.ticketbox.vn/poster/9f657cc3-42fa-11ee-81b4-0242ac110006'
    },
    {
        title: 'Phương thức thanh toán',
        icon: 'https://cdn02.ticketbox.vn/poster/bd3014f7-42fd-11ee-81b4-0242ac110006'
    },
]


const SideNav = ({ ...props}) => {
	return (
		<nav {...props}
			className="fixed laptop:block hidden z-2 top-[4.5rem] bg-zinc-900
            h-screen md:w-[20%] sm:w-[30%] border-0 overflow-hidden"
		>
            {/* Categories */}
			<Categories list={categories} />

			<div className="border border-emerald-200 w-[90%] ml-4"></div>

            {/* Policies */}
			<Categories list={policies} />

            <div className="border border-emerald-200 w-[90%] ml-4"></div>

            {/* Bộ công thương */}
			<div className="px-3 py-4">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABICAMAAACX4QqAAAAB1FBMVEUAAADiJy3aJyffKC7eJy3////////////////+/v7////+/v7////+/v7////+/v7////yt7f+/v7////////9+/n////////+/v7+/v7fKzD+/v7////+/v7////////////+/v7////+/v7////+/v7fKS3iKC7+/v7+/v7////////////+/v7hKC3jKS/eKSz9/f3hKCz9/f3dKC3rfX/fJivxra3hKS7aKC3////aJiz//f3ZJivbLzTmbXDvpKbeKS7bLDHcMTbcMzjZIyjbKi/un6DdOj/dNTn++vrndnnrjpDqhoniVFj309TgSk7lZ2vfR0vePEDmam775+fZICXiVlrdOT3++Pn98vLfREj+9/fpfH/dNzziWV3hTlLriYzpgIP64eL1xcbmbnL30NHoeXzkYmbaJSrYHiP42Nn1x8jrjI/ncXTkZWjjXF/0wMHtm53nc3bhUVX41tf2ysztl5n//Pz98PDfQkb3zc7ys7XslJbpf4HePkL52tvyubrxra/wqqzuoaPskJPjX2P99PT75eb0vb/65OTwp6ntmpveQETytrfxr7HjXmL86+vzu7353d7529z0wsPysLLpg4X87u776enqhIb+8/P/EbGQAAAAOXRSTlMAYRR5/fwI+PIXSyrkiNZtIAbhrncN0MhBM/vt7Zro3dmlk1xTE+/afsG+urNjUz4l77iejYF5cHAR4+iyAAAQiElEQVRo3tWbiVcaRxzH7RFtYpv0TNL7vu+7O7Og3V1YzuVUQOSUsyqCIggqqFwi3rfpP9uZ3WF3iZq0r68t/b6XEGaW5ff5HfObATJwvV55/tX7H7z/3BdvP3Pjmbsvvfz+rfuvPv/KwP9FgzeHP3jz9hBQ65m77916/uYLA/2vF14ZvnNvCFylG/c+eH5woN/1/HNvgWt148WXbw70tW6+9Ax4tIae62eEl2+/cQM8Rs/c+7JP82hw+PZj3E/y6I137w/0oQbv3LsB/pxe/+zL/luPht/tLV7aN7YeWZjb3286zNsnB6beQrj9XL+l0fCbb6itH1u3ZhweF8dQFMUYnaER83ZssicIfbYc3X9Xlf6mgsWdZyGkFEFNMGRunNMqgjf7qTMPfz+kmJ/gHQZIXRKkDGejY0uq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"
					alt="Ezticket"
					className="ml-3 my-2 max-w-[40%]"
				></img>

				<div className="px-4 py-2 text-xs text-white">
					<span className="block leading-6">Công ty TNHH EzTicket</span>
					<span className="block leading-6">
						Đại diện theo pháp luật: Kuo Nhan Dung Địa chỉ: Tầng 16,
						Tháp X, Tòa nhà Emerald, 101 Võ Văn Tần, Phường 15, Quận
						3, TP. Hồ Chí Minh
					</span>
					<span className="block leading-6">Tel: 0767916592</span>
					<span className="block leading-6">
						Email: contact.ezticket@gmail.com
					</span>
					<span className="block leading-6">
						Giấy chứng nhận đăng ký doanh nghiệp số: 0313605444, cấp
						lần đầu ngày 07/01/2016 bởi Sở Kế Hoạch và Đầu Tư TP. Hồ
						Chí Minh
					</span>
				</div>
			</div>
		</nav>
	);
};

export default SideNav;
