import React, { useContext, useState } from "react";

import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const navigate = useNavigate();

	const [products, setproducts] = useContext(ProductContext);

	const [title, setTitle] = useState("");

	const [image, setImage] = useState("");

	const [price, setPrice] = useState("");

	const [description, setDescription] = useState("");

	const [category, setCategory] = useState("");

	const addProductHandler = (e) => {
		e.preventDefault();

		if (
			title.trim().length < 5 ||
			image.trim().length < 5 ||
			category.trim().length < 5 ||
			price.trim().length < 1 ||
			description.trim().length < 5
		) {
			alert("each and every input must have 4 characters");
			return;
		}

		const product = {
			id: nanoid(),
			title,
			image,
			category,
			price,
			description,
		};

		setproducts([...products, product]);
        localStorage.setItem("products",JSON.stringify([...products, product]))
        toast.success("Product Added Successfully")
		navigate("/");
	};

	return (
		<form
			onSubmit={addProductHandler}
			action=""
			className="flex flex-col items-center p-[5%] w-screen h-screen"
		>
			<h1 className="w-1/2 mb-5 text-3xl">Add New Product </h1>
			<input
				type="url"
				placeholder="image link"
				className="w-1/2 p-3 mb-3 rounded text-1xl bg-zinc-100"
				onChange={(e) => {
					setImage(e.target.value);
				}}
				value={image}
			/>
			<input
				type="text"
				placeholder="title"
				className="w-1/2 p-3 mb-3 rounded text-1xl bg-zinc-100"
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				value={title}
			/>
			<div className="flex justify-between w-1/2">
				<input
					type="text"
					placeholder="Category"
					className="p-3 mb-3 text-1xl rounded w-[48%] bg-zinc-100"
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					value={category}
				/>
				<input
					type="number"
					placeholder="price"
					className="w-[48%] p-3 mb-3 text-1xl rounded bg-zinc-100"
					onChange={(e) => {
						setPrice(e.target.value);
					}}
					value={price}
				/>
			</div>
			<textarea
				className="w-1/2 p-3 mb-3 rounded text-1xl bg-zinc-100"
				rows="10"
				onChange={(e) => {
					setDescription(e.target.value);
				}}
				value={description}
				placeholder="enter product description here"
			></textarea>
			<div className="w-1/2">
				<button className="self-start px-5 py-2 text-blue-300 border border-blue-200 rounded">
					Add new Product
				</button>
			</div>
		</form>
	);
};

export default Create;
