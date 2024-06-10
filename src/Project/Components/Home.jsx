import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Axios from "../Utils/Axios";
import Loading from "../SubComponents/Loading";
import Navbar from "./Navbar";
import { ProductContext } from "../Utils/Context";

const Home = () => {
	const [products] = useContext(ProductContext);

	const { search } = useLocation();

	const category = decodeURIComponent(search.split("=")[1]);

	const [filteredProducts, setFilteredProducts] = useState(null);

	const getProductsCategory = async () => {
		try {
			const { data } = await Axios.get(`/products/category/${category}`);
			setFilteredProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!filteredProducts || category == "undefined")
			setFilteredProducts(products);
		if (category != "undefined") {
			// getProductsCategory();
			setFilteredProducts(products.filter((p) => p.category == category));
		}
	}, [category, products]);

	return products ? (
		<>
			<Navbar />
			<div className="h-full w-[90%]  p-8 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
				{filteredProducts &&
					filteredProducts.map((product, index) => {
						return (
							<Link
								key={index}
								to={`/details/${product.id}`}
								className="p-3 mr-3 mb-3 border rounded shadow card w-[18%] h-[60%] flex-col flex justify-center items-center"
							>
								<div
									className="hover:scale-110 w-full h-[70%] bg-contain bg-no-repeat bg-center mb-3"
									style={{
										backgroundImage: `url(${product.image})`,
									}}
								></div>
								<h1 className="text-sm hover:text-blue-300">
									{product.title}
								</h1>
							</Link>
						);
					})}
			</div>
		</>
	) : (
		<Loading />
	);
};

export default Home;
