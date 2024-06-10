import { useEffect, useState } from "react";

import axios from "../Utils/MainAxios";

const Show = () => {
	const [products, setProducts] = useState([]);

	const getProducts = () => {
		const api = "/products";
		axios
			.get(api)
			.then((products) => {
				console.log(products);
				setProducts(products.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const addProducts = () => {
		const api = "products";
		axios
			.post(api, {
				title: "test product",
				price: 13.5,
				description: "lorem ipsum set",
				image: "https://i.pravatar.cc",
				category: "electronic",
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
        getProducts()
	},[]);
	return (
		<div>
			<button className="px-5 py-2 bg-red-500" onClick={getProducts}>
				Get Products from API
			</button>
			<br />
			<br />
			<button className="px-5 py-2 bg-red-500" onClick={addProducts}>
				Add Product to API
			</button>
			<ul>
				{products.length > 0 ? (
					products.map((item, index) => (
						<li key={index} className="p-5 mt-3 bg-red-400 rounded">
							{item.title}
						</li>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</ul>
		</div>
	);
};

export default Show;
