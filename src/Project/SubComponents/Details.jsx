import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Loading from "./Loading";
import { ProductContext } from "../Utils/Context";
import axios from "../Utils/Axios";
import { toast } from "react-toastify";

const Details = () => {
	const [products, setproducts] = useContext(ProductContext);

	const [product, setproduct] = useState(null);

	const { id } = useParams();

	const navigate = useNavigate();
	// const getSingleProduct = async () => {
	// 	try {
	// 		const { data } = await axios.get(`/products/${id}`);
	// 		setproduct(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		if (!product) {
			setproduct(products.filter((p) => p.id == id)[0]);
		}
	}, []);

	const productDeleteHandler = (id) => {
		const filteredProducts = products.filter((p) => p.id !== id);
		setproducts(filteredProducts);
		localStorage.setItem("products", JSON.stringify(filteredProducts));
		toast.error("Product Deleted SuccessFully")
		navigate("/");
	};

	return product ? (
		<div className="w-[70%] flex h-full justify-between items-start gap-16 m-auto p-[8%]">
			<img
				className="h-[80%] w-[50%] object-contain "
				src={`${product.image}`}
				alt=""
			/>

			<div className="content h-[50%] w-[50%]">
				<h1 className="text-4xl">{product.title}</h1>
				<h3 className="my-5 text-zinc-400">{product.category}</h3>
				<h2 className="mb-3 text-xl font-semibold">
					$ {product.price}
				</h2>
				<p className="mb-[5%] text-zinc-500">{product.description}</p>
				<Link
					to={`/edit/${product.id}`}
					className="px-5 py-2 mr-5 text-blue-300 border border-blue-200 rounded"
				>
					Edit
				</Link>
				<button
					onClick={() => productDeleteHandler(product.id)}
					className="px-5 py-2 text-red-300 border border-red-200 rounded"
				>
					Delete
				</button>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default Details;
