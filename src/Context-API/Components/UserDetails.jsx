import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../Context/Context";
import { useContext } from "react";

const UserDetails = () => {
	const { id } = useParams();
    const navigate = useNavigate();
	const { users } = useContext(UserContext);
	return (
		<div>
			<h1 className="text-red-800 font-bold text-4xl">
				{users[id].username}
			</h1>
			<h3 className="text-red-400 font-bold text-4xl">
				{users[id].city}
			</h3>
            <button onClick={()=>{navigate(-1)}} className="p-3 bg-blue-500 m-3">Go Back</button>
		</div>
	);
};

export default UserDetails;
