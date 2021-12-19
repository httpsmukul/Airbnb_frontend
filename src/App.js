import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header.jsx";
import { Signup } from "./components/signup.jsx";
import { Signin } from "./components/signin.jsx";
import { Header_bar } from "./components/header_bar.jsx";
import { Routes } from './components/Routes'
function App() {
	return (
		<div className="">
			{/* <Header></Header> */}
			{/* <Header_bar></Header_bar> */}
			{/* <Signup></Signup> */}
			{/* <Signin></Signin> */}
			<Routes />
		</div>
	);
}

export default App;
