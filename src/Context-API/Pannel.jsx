import { Link, Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import UserDetails from "./Components/UserDetails";
import Users from "./Components/Users";

const Pannel = () => {
	return (
		<div className="p-5">
			<nav className="flex justify-center gap-10">
				<Link to={"/"}>Home</Link>
				<Link to={"/users"}>User</Link>
				<Link to={"/about"}>About</Link>
			</nav>
			<hr />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users/:id" element={<UserDetails />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
};

export default Pannel;
