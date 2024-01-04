import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ list }) => {
	return (
		<ul className="m-0 py-5 list-none text-white">
			{list.map((item, index) => {
				return (
					<li key={index} 
                        className="w-[100%] flex px-4 
                        sm:text-xs md:text-sm 
                        sm:leading-5 md:leading-6 
                        hover:text-emerald-200">
						<Link
							to={item.link}
							className="w-[100%] h-[100%] px-3 py-1
                            flex items-center"
						>
							<img
								src={item.icon}
								width={20}
								height={20}
								className="mr-2"
							/>
							<span>{item.title}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Categories;
