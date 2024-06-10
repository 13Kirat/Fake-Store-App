import { useRef } from "react";

const UseRef = () => {
	const name = useRef(null);
	const age = useRef(null);
	const email = useRef(null);
	const submitHandler = (event) => {
		event.preventDefault();
		console.log(name, age, email);
		console.log(name.current, age.current, email.current);
		console.log(name.current.value, age.current.value, email.current.value);
	};
	return (
		<form action="" onSubmit={submitHandler}>
			<input type="text" placeholder="name" ref={name} />
			<input type="number" placeholder="age" ref={age} />
			<input type="email" placeholder="age" ref={email} />
			<input type="submit" />
		</form>
	);
};

export default UseRef;
