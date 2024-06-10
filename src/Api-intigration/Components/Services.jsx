import { useEffect, useState } from "react";

import axios from "../Utils/MainAxios";

const Services = () => {
	const [state, setState] = useState("this a first data");
	const [data, setData] = useState("this a very large data");
	useEffect(() => {
		getUsers()
		console.log("service component is created");
		return () => {
			console.log("Service component is deleted");
		};
	}, []);
	// agar square brackets nhi h use effect me to changes hona par sara component rerender hoga , agr khali square brackets ha too rerendering nhi hoga siraf updation hi hoga by states , agar koi value ha brackets me too uska change hona par rerendring hoga

	const getUsers = () => {
		const api = "/users";
		axios
			.get(api)
			.then((users) => {
				console.log(users);
				})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h1>Services</h1>

			<h1>{state}</h1>
			<button
				onClick={() => setState("changed first data")}
				className="bg-red-400 rounded-lg p-3"
			>
				Change First data
			</button>
			<br />
			<hr />
			<br />
			<h1>{data}</h1>
			<button
				onClick={() => setData("changed large data")}
				className="bg-red-400 p-3 rounded-lg"
			>
				Change Large data
			</button>
		</div>
	);
};

export default Services;
