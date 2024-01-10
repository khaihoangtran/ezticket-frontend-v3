import { HiCode, HiCog, HiCheck } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import UploadBox from './UploadBox';
import Editor from './Editor';
import axios from 'axios';

export default function EditForm({ ckeditor, inputs, uploadbox, formData, setFormData }) {
	
	const updateFormData = (e, tag) => {
		let updatedFormData = {
			...formData,
		};
		updatedFormData[tag] = e.target.value;
		setFormData(updatedFormData);
	}

    return (
        <div className="grid grid-cols-4 gap-10">
            <div className="col-span-3 bg-gray-50 border border-gray-300 p-5 rounded">
                {ckeditor && formData && (
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium">{ckeditor[0]}</label>
                        <Editor formData={formData} setFormData={setFormData} tag={ckeditor[1]}  />
                    </div>
                )}

                <div className="grid grid-cols-2 gap-8">
                    {inputs.map((input, index) => {
                        return (
                            <div key={index} className="col-span-1">
                                <div className="relative pb-0">
                                    <label className="block mb-2 text-sm font-medium">{input.title}</label>
                                    <div className="relative bg-gray-200 rounded">
                                        {input.type === 'select' ? (
                                            <select
                                                onChange={(e) => {
                                                    updateFormData(e, input.tag);
                                                }}
                                                className="w-full text-sm outline-none focus:ring-0 border border-gray-200"
                                            >
                                                <option value="concert-nhac">Concert nhạc</option>
                                                <option value="sau-khau-dien-anh">Sân khấu điện ảnh</option>
                                            </select>
                                        ) : (
                                            <input
                                                className="w-full h-[2.4rem] px-3 outline-none focus:ring-0 border border-gray-200 text-sm"
                                                type={input.type}
                                                value={formData[input.tag]}
                                                onChange={(e) => {
                                                    updateFormData(e, input.tag);
                                                }}
                                            />
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-400 pt-2">{input.about}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {uploadbox && (
                    <div className="mt-8">
                        <label className="block mb-2 text-sm font-medium">{uploadbox}</label>
                        <UploadBox />
                    </div>
                )}
            </div>

            <div className="col-span-1">
                <div className="w-full bg-gray-50 rounded border border-gray-200">
                    <div className="p-4">
                        <p className="text-xs">Thông tin cập nhật</p>
                        <div className="pt-5">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs text-gray-400 text-uppercase">Cập nhật lần cuối</p>
                                <p className="text-xs text-gray-400 text-uppercase">2 tháng trước</p>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs text-gray-400 text-uppercase">Người cập nhật</p>
                                <p className="text-xs text-gray-400 text-uppercase">admin</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full my-3 bg-emerald-50 flex items-center border border-gray-200">
                    <div className="p-2 flex flex-row gap-2">
                        <HiCheck color="#76BA99" />
                        <p className="text-xs text-main font-medium">Thông tin tổ chức đã được cập nhật</p>
                    </div>
                </div>

                <div className="w-full bg-gray-50 rounded border border-gray-200">
                    <ul>
                        <li className="cursor-pointer hover:bg-gray-100 px-5 py-1 border-b border-gray-200">
                            <div className="flex flex-row items-center h-8 gap-2">
                                <HiCode />
                                <p className="text-xs">Chỉnh sửa giao diện</p>
                            </div>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-100 px-5 py-1 border-b border-gray-200">
                            <div className="flex flex-row items-center h-8 gap-2">
                                <HiCog />
                                <p className="text-xs">Thay đổi các mục</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
