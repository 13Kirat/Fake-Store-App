import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import { useContext } from "react";

const Navbar = () => {
	const [products] = useContext(ProductContext);

	let distinct_category = products
		? products.reduce((acc, cv) => [...acc, cv.category], [])
		: null;

	distinct_category = [...new Set(distinct_category)];


	const color = () => {
		return `rgba(${(Math.random() * 255).toFixed()},${(
			Math.random() * 255
		).toFixed()},${(Math.random() * 255).toFixed()},0.5)`;
	};

	return (
		<nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
			<Link
				to="/create"
				className="px-5 py-2 text-blue-300 border border-blue-200 rounded"
			>
				Add new Product
			</Link>
			<hr className="w-[80%] my-3" />
			<h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
			<div className="w-[80%] ">
				{distinct_category.map((c, i) => {
					return (
						<Link
							key={i}
							to={`/?category=${c}`}
							className="flex items-center mb-3"
						>
							<span
								className="mr-2  w-[15px] h-[15px] rounded-full"
								style={{ backgroundColor: `${color()}` }}
							></span>
							{c}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
