import { Route, Routes } from "react-router-dom";

import About from "../Components/About";
import Home from "../Components/Home";
import User from "../Components/User";
import UserDetails from "../SubComponents/UserDetails";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/User" element={<User />}>
				<Route path="/User/:name" element={<UserDetails />} />
			</Route>
			{/* <Route path="/User/:name" element={<UserDetails />} /> */}
			<Route path="/About" element={<About />} />
		</Routes>
	);
};

export default Routing;