const Navbar = ({ number }) => {
	return (
		<div className="w-full px-20 py-3 flex justify-between items-center">
			<h3>Orange</h3>
			<div className="flex bg-orange-600 text-white p-2 px-4 rounded text-sm gap-3">
				<h3>Favourates</h3>
				<h4>{number}</h4>
				{/* pura data pass kar k edher a k us arr pe filter laga k bhi number pata kr sakta the */}
			</div>
		</div>
	);
};

export default Navbar;
