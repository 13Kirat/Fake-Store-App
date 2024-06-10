import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const Card = () => {
	const [val, setval] = useState(0);
	return (
		<div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
			<div className="rounded-md w-60 relative h-32 bg-zinc-500 flex overflow-hidden">
				<img
					src="../../src/assets/109.jpg"
					alt=""
					className={`shrink-0 duration-700 ease-in-out transition-transform w-full h-full ${
						val == false
							? "-translate-x-[0%]"
							: "-translate-x-[100%]"
					} object-cover`}
				/>
				<img
					src="../../src/assets/108.jpg"
					alt=""
					className={`shrink-0 duration-700 ease-in-out transition-transform w-full h-full ${
						val == false
							? "-translate-x-[0%]"
							: "-translate-x-[100%]"
					} object-cover`}
				/>
				<span
					onClick={() => setval(() => !val)}
					className="w-8 h-8 bottom-[0%] flex items-center justify-center rounded-full bg-[#dadada8b] left-1/2 -translate-x-[50%] -translate-y-[50%] absolute"
				>
					{val ? (
						<FaArrowLeft size={"0.9em"} />
					) : (
						<FaArrowRight size={"0.9em"} />
					)}
				</span>
			</div>
		</div>
	);
};

export default Card;
