import { Link } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { useContext } from "react";

const Users = () => {
	const { users } = useContext(UserContext);
	return (
		<div>
			<h1 className="text-3xl">Users List</h1>
			<div className="mt-10 flex flex-col">
				{users.map((user) => (
					<Link key={user.id} to={`/users/${user.id-1}`} className="mb-3 bg-red-300 p-3">
                        {user.username}
                    </Link>
				))}
			</div>
		</div>
	);
};

export default Users;
