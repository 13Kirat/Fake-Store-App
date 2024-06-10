import { Link, Route, Routes, useLocation } from "react-router-dom";

import Create from "./Components/Create";
import Details from "./SubComponents/Details";
import Edit from "./SubComponents/Edit";
import Home from "./Components/Home";

const Project = () => {
	const { search, pathname } = useLocation();
	return (
		<div className="flex w-screen h-screen">
			{(pathname != "/" || search.length > 0) && (
				<Link
					to="/"
					className="absolute text-red-300 left-[18%] top-[3%]"
				>
					Home
				</Link>
			)}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/edit/:id" element={<Edit />} />
			</Routes>
		</div>
	);
};

export default Project;
