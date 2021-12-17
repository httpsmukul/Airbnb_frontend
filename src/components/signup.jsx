import "./style/signup.css";
import fb from "./img/Vector.png";
import google from "./img/google.png";
import email from "./img/email.png";
import axios from "axios";
import { Signin } from "./signin";
import { useState } from "react";
export const Signup = () => {
	const [first, setfirst] = useState("");
	const [last, setlast] = useState("");
	const [Email, setemail] = useState("");
	const [pass, setpass] = useState(null);
	const [show, setshow] = useState(false);

	const signup = () => {
		// console.log("sign up working");
		setshow(!show);

		axios
			.post("http://localhost:3001/signup", {
				first_name: first,
				last_name: last,

				email: Email,
				password: pass,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<div className="start">
				<div className="crose">
					<div className="x">x</div>

					<div className="log">Log in or Sign up</div>
				</div>
				<hr />
				<div className="welcome">
					{/* <div className="welcome_text">Welcome to Airbnb</div> */}
					<h3 className="welcome_text">Welcome to Airbnb</h3>
					<div>
						<input
							placeholder="First name"
							type="string"
							className="first_name"
							onChange={(e) => setfirst(e.target.value)}
						></input>
						<br />
						<br />
						<input
							placeholder="last name"
							type="string"
							className="first_name"
							onChange={(e) => setlast(e.target.value)}
						></input>
						<br />
						<br />

						<input
							placeholder="Email"
							type="email"
							className="first_name"
							onChange={(e) => setemail(e.target.value)}
						></input>
						<br />
						<br />

						<input
							placeholder="Password"
							type="password"
							className="first_name"
							onChange={(e) => setpass(e.target.value)}
						></input>
						<br />
						<br />
						<input
							onClick={signup}
							type="submit"
							// placeholder="hey"
							className="first_name_sub"
						></input>
						<br />
						<br />
						<hr />
						<div className="fb">
							<div>
								<img src={fb}></img>
							</div>
							<div className="fb_text">Continue with Facebook</div>
						</div>
						<br />
						<div className="fb">
							<div>
								<img src={google}></img>
							</div>
							<div className="fb_text">Continue with Facebook</div>
						</div>
						<br />
						<div className="fb">
							<div>
								<img src={email}></img>
							</div>
							<div className="fb_text">Continue with Facebook</div>
						</div>

						<br />
					</div>
				</div>
			</div>
		</>
	);
};
