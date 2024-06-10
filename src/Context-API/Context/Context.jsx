import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
	const [users, setUsers] = useState([
		{ id: 1, username: "Kirat", city: "INDIA" },
		{ id: 2, username: "Harry", city: "COLOMBIA" },
		{ id: 3, username: "Julia", city: "USA" },
	]);
	return (
		<>
			<UserContext.Provider value={{users,setUsers}}>{props.children}</UserContext.Provider>
		</>
	);
};

export default Context;
