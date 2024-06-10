import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";

const Edit = () => {
	const [products, setproducts] = useContext(ProductContext);

	const [product, setproduct] = useState({
		title: "",
		image: "",
		category: "",
		description: "",
		price: "",
	});

	const changeHandler = (e) => {
		// console.log(
		// 	e.target.name,
		// 	e.target.image,
		// 	e.target.description,
		// 	e.target.category,
		// 	e.target.price
		// );
		setproduct({ ...product, [e.target.name]: [e.target.value] });
	};

	const { id } = useParams();

	// const [title, setTitle] = useState("");

	// const [image, setImage] = useState("");

	// const [price, setPrice] = useState("");

	// const [description, setDescription] = useState("");

	// const [category, setCategory] = useState("");

	useEffect(() => {
		setproduct(products.filter((p) => p.id == id)[0]);
	}, [id]);

	const addProductHandler = (e) => {
		e.preventDefault();

		// if (
		// 	product.title.trim().length < 5 ||
		// 	product.image.trim().length < 5 ||
		// 	product.category.length < 5 ||
		// 	product.price.length < 1 ||
		// 	product.description.trim().length < 5
		// ) {
		// 	alert("each and every input must have 4 characters");
		// 	return;
		// }

		const pi = products.findIndex((p) => p.id == id);

		const copyData = [...products];
		copyData[pi] = { ...products[pi], ...product };

		console.log(copyData);
		setproducts(copyData);
		localStorage.setItem("products", JSON.stringify(copyData));
		navigate(-1);
	};

	const navigate = useNavigate();
	return (
		<form
			onSubmit={addProductHandler}
			action=""
			className="flex flex-col items-center p-[5%] w-screen h-screen"
		>
			<h1 className="w-1/2 mb-5 text-3xl">Add New Product </h1>
			<input
				type="url"
				name="iamge"
				placeholder="image link"
				className="w-1/2 p-3 mb-3 rounded text-1xl bg-zinc-100"
				onChange={changeHandler}
				value={product && product.image}
			/>
			<input
				type="text"
				placeholder="title"
				className="w-1/2 p-3 mb-3 rounded text-1xl bg-zinc-100"
				onChange={changeHandler}
				name="title"
				value={product && product.title}
			/>
			<div className="flex justify-between w-1/2">
				<input
					type="text"
					placeholder="Category"
					name="category"
					className="p-3 mb-3 text-1xl rounded w-[48%] bg-zinc-100"
					onChange={changeHandler}
					value={product && product.category}
				/>
				<input
					type="number"
					placeholder="price"
					name="price"
					className="w-[48%] p-3 mb-3 text-1xl rounded bg-zinc-100"
					onChange={changeHandler}
					value={product && product.price}
				/>
			</div>
			<textarea
				className="w-1/2 p-3 mb-3 rounded text-1xl bg-zinc-100"
				rows="10"
				name="description"
				onChange={changeHandler}
				value={product && product.description}
				placeholder="enter product description here"
			></textarea>
			<div className="w-1/2">
				<button className="self-start px-5 py-2 text-blue-300 border border-blue-200 rounded">
					Edit Product
				</button>
			</div>
		</form>
	);
};

export default Edit;
