import Navbar from "../SubComponents/Navbar";
import Song from "../SubComponents/Song";
import { useState } from "react";

const Songs = () => {
	const raw = [
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
		{
			image: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Kalla Changa",
			artist: "Ninja",
			added: false,
		},
	];

	const [data, setdata] = useState(raw);

	const [count, setcount] = useState(0);

	const toAdd = (songNo) => {
		setdata((prev) => {
			return prev.map((item, index) => {
				if (index == songNo) {
					if (item.added) {
						setcount(count - 1);
					} else {
						setcount(count + 1);
					}
					return { ...item, added: !item.added };
				}
				return item;
			});
		});
	};

	return (
		<div className="w-full h-fit bg-zinc-300">
			<Navbar number={count} />
			<div className="px-20 flex justify-evenly items-center gap-10 mt-10 flex-wrap">
				{data.map((item, index) => {
					return (
						<Song
							key={index}
							add={toAdd}
							index={index}
							info={item}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Songs;
