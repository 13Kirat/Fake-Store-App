const Song = ({ info, add, index }) => {
	const { image, name, artist, added } = info;
	return (
		<div className="w-60 m-5 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative">
			<div className="w-20 h-20 rounded-md">
				<img
					src={`${image}`}
					alt="oooh nooo"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="">
				<h3 className="text-xl leading-none font-semibold">{name}</h3>
				<h6 className="text-sm">{artist}</h6>
			</div>
			<button
				onClick={() => {
					add(index);
				}}
				className={`px-4 py-3 whitespace-nowrap ${added ? "bg-teal-600" : "bg-orange-600"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}
			>
				{added ? "Added" : "Add to Favourates"}
			</button>
		</div>
	);
};

export default Song;
