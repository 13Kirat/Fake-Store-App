import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-center gap-10 mt-10">
			<NavLink
				style={(e) => {
					return {
						color: e.isActive ? "red" : "",
						fontWeight: e.isActive ? "bold" : "",
					};
				}}
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				className={(e) => {
					return [
						e.isActive ? "text-red-500" : "",
						e.isActive ? "font-bold" : "",
					].join(" ");
				}}
				to="/User"
			>
				User
			</NavLink>
			<NavLink to="/About">
				{(e) => {
					return (
						<span
							className={[
								e.isActive ? "text-red-500" : "",
								e.isActive ? "font-bold" : "",
							].join(" ")}
						>
							About
						</span>
					);
				}}
			</NavLink>
		</nav>
	);
};

export default Navbar;
