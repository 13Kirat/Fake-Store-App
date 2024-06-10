import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context-API/Context/Context.jsx";
// import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
	<Context>
		{/* <React.StrictMode> */}
		<BrowserRouter>
			<App />
			<ToastContainer />
		</BrowserRouter>
		{/* </React.StrictMode> */}
	</Context>
);
