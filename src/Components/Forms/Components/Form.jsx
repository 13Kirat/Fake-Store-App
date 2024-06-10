import { useForm } from "react-hook-form";

const Form = ({ submitData }) => {
	const { register, handleSubmit, reset } = useForm();
	const done = (data) => {
		submitData(data);
        reset();
	};
	return (
		<div className="flex justify-center mt-10 ">
			<form className="flex gap-10" onSubmit={handleSubmit(done)}>
				<input
					{...register("name")}
					className="px-2 py-1 text-base font-semibold rounded-md outline-none"
					type="text"
					placeholder="Name"
				/>
				<input
					{...register("email")}
					className="px-2 py-1 text-base font-semibold rounded-md outline-none"
					type="text"
					placeholder="Email"
				/>
				<input
					{...register("picture")}
					className="px-2 py-1 text-base font-semibold rounded-md outline-none"
					type="text"
					placeholder="Image Url"
				/>
				<input
					type="submit"
					className="px-5 py-1 font-semibold text-white bg-blue-600 rounded-md"
				/>
			</form>
		</div>
	);
};

export default Form;
