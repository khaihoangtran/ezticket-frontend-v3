import { HiCode, HiCog, HiCheck } from "react-icons/hi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import UploadBox from "./UploadBox";

export default function EditForm({ ckeditor, editors, uploadbox }) {
	const [editorState, setEditorState] = useState("");

	return (
		<div className="grid grid-cols-4 gap-10">
			<div className="col-span-3 bg-gray-50 border border-gray-300 p-5 rounded">
				{ckeditor && (
					<div className="mb-5">
						<label className="block mb-2 text-sm font-medium">
							{ckeditor}
						</label>
						<CKEditor
							editor={ClassicEditor}
							data={editorState}
							onReady={(editor) => {
								// You can store the "editor" and use when it is needed.
								console.log("Editor is ready to use!", editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								setEditorState(data);
								console.log({ event, editor, data });
							}}
							onBlur={(event, editor) => {
								console.log("Blur.", editor);
							}}
							onFocus={(event, editor) => {
								console.log("Focus.", editor);
							}}
						/>
					</div>
				)}

				<div className="grid grid-cols-2 gap-8">
					{editors.map((editor, index) => {
						return (
							<div key={index} className="col-span-1">
								<div className="relative pb-0">
									<label className="block mb-2 text-sm font-medium">
										{editor.title}
									</label>
									<div className="relative bg-gray-200 rounded">
										<input
											className="w-full h-[2.4rem] px-3 outline-none focus:ring-0 border border-gray-200 text-sm"
											type="text"
											onChange={(e) => {
												let updatedFormData = {
													...formData,
												};
												updatedFormData[editor.tag] =
													e.target.value;
												setFormData(updatedFormData);
											}}
										/>
									</div>
									<p className="text-xs text-gray-400 pt-2">
										{editor.about}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{uploadbox && (
					<div className="mt-8">
						<label className="block mb-2 text-sm font-medium">
							{uploadbox}
						</label>
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
								<p className="text-xs text-gray-400 text-uppercase">
									Cập nhật lần cuối
								</p>
								<p className="text-xs text-gray-400 text-uppercase">
									2 tháng trước
								</p>
							</div>
						</div>
						<div className="pt-5">
							<div className="flex flex-row items-center justify-between">
								<p className="text-xs text-gray-400 text-uppercase">
									Người cập nhật
								</p>
								<p className="text-xs text-gray-400 text-uppercase">
									admin
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full my-3 bg-emerald-50 flex items-center border border-gray-200">
					<div className="p-2 flex flex-row gap-2">
						<HiCheck color="#76BA99" />
						<p className="text-xs text-main font-medium">
							Thông tin tổ chức đã được cập nhật
						</p>
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
