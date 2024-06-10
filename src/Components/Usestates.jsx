import { useState } from "react";

const Usestates = () => {
	const [count, setcount] = useState(0);
	const [val, setval] = useState({ name: "kirat", isbanned: false });
	const [arr, setarr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [data, setdata] = useState([
		{ name: "Harry", age: 45 },
		{ name: "kirat", age: 26 },
		{ name: "Gurkirat", age: 35 },
	]);
	return (
		<div className="p-5 m-5">
			<h1>{count}</h1>
			<button
				className="px-3 py-1 m-3 bg-blue-500 rounded-full"
				onClick={() => setcount((prev) => prev + 1)}
			>
				change{" "}
			</button>

			<hr />

			<h1>name : {val.name}</h1>
			<h1>is banned : {val.isbanned.toString()}</h1>
			<button
				className={`px-3 py-1 ${
					val.isbanned ? "bg-red-500" : "bg-blue-500"
				} rounded-full m-3`}
				onClick={() => setval({ ...val, isbanned: !val.isbanned })}
			>
				change
			</button>

			<hr />

			{arr.map((item, index) => {
				return (
					<h1 key={index}>
						At index {index} value is {item}
					</h1>
				);
			})}
			<button
				className={`px-3 py-1 bg-blue-500 rounded-full m-3`}
				onClick={() =>
					setarr(() =>
						arr.filter((item, index) => index != arr.length - 1)
					)
				}
			>
				change
			</button>
			<br />
			<button
				className={`px-3 py-1 bg-blue-500 rounded-full m-3`}
				onClick={() =>
					setarr(() => arr.filter((item, index) => index != 2))
				}
			>
				delete element on 2nd index
			</button>
			<br />
			<button
				className={`px-3 py-1 bg-blue-500 rounded-full m-3`}
				onClick={() =>
					setarr(() => arr.filter((item) => item % 2 !== 0))
				}
			>
				value divide by 2
			</button>
			<br />
			<button
				className={`px-3 py-1 bg-blue-500 rounded-full m-3`}
				onClick={() => setarr([...arr, 10])}
			>
				add 10 at last
			</button>

			<hr />

			{data.map((item, index) => {
				return (
					<div key={index}>
						<h1>{item.name}</h1>
						<h1>{item.age}</h1>
					</div>
				);
			})}
			<button
				className={`px-3 py-1 bg-blue-500 rounded-full m-3`}
				onClick={() =>
					setdata(() =>
						data.map((item) =>
							item.name === "Harry"
								? { name: "Harry", age: 19 }
								: item
						)
					)
				}
			>
				change age of harry
			</button>
		</div>
	);
};

export default Usestates;
