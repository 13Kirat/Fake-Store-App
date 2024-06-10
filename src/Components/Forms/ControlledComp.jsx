import { useState } from "react";

const ControlledComp = () => {
	const [val, setVal] = useState({ name: null, email: null });
	const handleSubmit = (event) => {
		event.preventDefault();
        console.log(val)
	};
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(event) =>
						setVal({ ...val, name: event.target.value })
					}
					placeholder="name"
				/>
				<input
					type="email"
					onChange={(event) =>
						setVal({ ...val, email: event.target.value })
					}
					placeholder="email"
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default ControlledComp;
