import Cards from "./Components/Cards";
import Form from "./Components/Form";
import { useState } from "react";

const Exercise = () => {
	const [users, setUsers] = useState([]);
	const submitData = (data) => {
		setUsers([...users, data]);
	};
    
    const handleRemove = (id)=>{
        setUsers(()=>users.filter((item,index)=>index!==id))        
    }

	return (
        
		<div className="flex items-center justify-center w-full h-screen bg-zinc-200">
			<div className="container mx-auto">
				<Cards users={users} handleRemove={handleRemove} />
				<Form submitData={submitData} />
			</div>
		</div>
	);
};

export default Exercise;
