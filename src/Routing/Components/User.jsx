import { Link, Outlet } from "react-router-dom";

const User = () => {
	return (
		<div className="w-1/2 m-auto mt-10 ">
			<h1 className="mb-2 text-5xl text-red-200 tex">User</h1>
			<div className="flex flex-col w-1/2 mt-5">
                <Link className="p-3 mb-3 text-2xl bg-red-200 hover:bg-red-300" to='/user/john'>John</Link>
                <Link className="p-3 mb-3 text-2xl bg-red-200 hover:bg-red-300" to='/user/ayush'>Ayush</Link>
                <Link className="p-3 mb-3 text-2xl bg-red-200 hover:bg-red-300" to='/user/anubhav'>Anubhav</Link>
            </div>
            <hr />
            <Outlet/>
		</div>
	);
};

export default User;
