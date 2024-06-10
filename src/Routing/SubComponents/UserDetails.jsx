import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
	const { name } = useParams();
    const navigate = useNavigate();
	const goBackHandler = () => {
        // navigate("/user")
        navigate(-1)
    };
	return (
		<div className="w-1/2 m-auto mt-10">
			<h1 className="mb-2 text-5xl text-red-200">User Details</h1>
			<h1 className="mt-3 text-2xl">User: {name}</h1>
			<button
				onClick={goBackHandler}
				className="px-3 py-2 mt-5 bg-red-300 to-white"
			>
				Go Back
			</button>
		</div>
	);
};

export default UserDetails;
