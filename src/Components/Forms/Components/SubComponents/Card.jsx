const Card = ({ user, handleRemove ,id }) => {
    console.log(user.picture)
	return (
		<div className="flex flex-col items-center h-full p-2 rounded-lg w-52 bg-zinc-100">
			<div className="overflow-hidden rounded-full w-[3vw] h-[3vw] image">
				<img
					src={user.picture}
					alt=""
					className="object-cover w-full h-full"
				/>
			</div>
			<h1 className="mt-1 text-xl font-semibold leading-none text-center">{user.name}</h1>
			<h4 className="text-xs font-semibold opacity-60">{user.email}</h4>
			<p className="mt-1 text-xs font-semibold tracking-tight text-center leading-1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
				commodi harum accusamus?
			</p>
			<button onClick={()=>handleRemove(id)} className="px-3 py-1 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md">
				Remove It
			</button>
		</div>
	);
};

export default Card;
