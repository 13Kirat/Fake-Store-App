import { useForm } from "react-hook-form";

const HookForm = () => {
	const { register,handleSubmit } = useForm();
	return (
		<form action="" onSubmit={handleSubmit(data=>console.log(data))}>
			<input {...register("name")} type="text" placeholder="name" />
			<input {...register("email")} type="email" placeholder="email" />
			<input type="submit" />
		</form>
	);
};

export default HookForm;
