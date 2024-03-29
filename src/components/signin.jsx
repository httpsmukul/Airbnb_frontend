import "./style/signup.css";
import fb from "./img/Vector.png";
import google from "./img/google.png";
import { Link } from "react-router-dom";

import email from "./img/email.png";
import axios from "axios";
import { Header_bar } from "./header_bar.jsx";

import { useState } from "react";
export const Signin = () => {
	const [first, setfirst] = useState("");
	const [pass, setpass] = useState(null);
	const [show, setshow] = useState(true);

	const signup = () => {
		// console.log("sign up working");

		axios
			.post("http://localhost:3001/signin", {
				emial: first,

				password: pass,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const handelx = () => {
		setshow(!show);
	};

	return (
		<>
			<Header_bar></Header_bar>
			{/* {show && ( */}
			<div>
				<div className="start">
					<div className="crose">
						<div className="x" onClick={handelx}>
							{/* x */}
						</div>

						<h1 className="fixtext">Sign in</h1>
					</div>
					<hr />
					<div className="welcome">
						{/* <div className="welcome_text">Welcome to Airbnb</div> */}
						<h3 className="welcome_text">Welcome to Airbnb</h3>
						<div>
							<input
								placeholder="Email"
								type="email"
								className="first_name"
								onChange={(e) => setfirst(e.target.value)}
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
							<Link to="/">
								<input
									onClick={signup}
									type="submit"
									// placeholder="hey"
									className="first_name_sub"
								></input>
							</Link>
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
							<br />
						</div>
					</div>
				</div>
				<div className="footer">
					<div className="last1">
						© 2021 Airbnb, Inc . · Privacy · Terms · Sitemap · Company details
					</div>
					<div className="last">English (IN) Choose a currency ₹ INR</div>
					<div className="ss">
						<div>
							<svg
								width="10"
								height="25"
								viewBox="0 0 17 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0 14.41V10.24C0 9.82 0.35 9.43 0.77 9.43H3.29V7.35C3.29 2.51 5.77 0.04 10.71 0C12.36 0 13.93 0.21 15.4 0.64C15.86 0.78 16.03 1.06 16 1.52L15.44 5.58C15.4 5.76 15.3 5.93 15.12 6.11C14.91 6.22 14.7 6.29 14.49 6.25C13.61 6 12.71 5.9 11.69 5.9C10.29 5.9 10.08 6.18 10.08 7.63V9.43H14.6C15.02 9.43 15.41 9.85 15.41 10.31L15.06 14.48C15.06 14.9 14.71 15.19 14.29 15.19H10.08V31.19C10.08 31.61 9.73 32 9.31 32H4.1C3.68 32 3.3 31.61 3.3 31.19V15.19H0.78C0.573131 15.19 0.374735 15.1078 0.228456 14.9615C0.0821781 14.8153 0 14.6169 0 14.41Z"
									fill="#222222"
								/>
							</svg>{" "}
						</div>
						<div>
							<svg
								width="20"
								height="15"
								viewBox="0 0 30 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M30 3.36C28.84 3.85 27.68 4.18 26.45 4.31C27.74 3.55 28.67 2.44 29.17 0.93C27.9565 1.64072 26.6362 2.15063 25.26 2.44C24.03 1.16 22.51 0.5 20.75 0.5C17.34 0.5 14.58 3.23 14.58 6.62C14.58 7.11 14.65 7.57 14.75 8C9.81 7.77 5.24 5.4 2.09 1.62C1.53 2.57 1.23 3.59 1.23 4.71C1.23 6.78 2.26 8.62 3.98 9.77C2.98 9.74 2.06 9.47 1.16 9.01V9.08C1.16 11.97 3.28 14.5 6.1 15.06C5.47 15.23 4.94 15.29 4.48 15.29C4.18 15.29 3.78 15.26 3.35 15.16C3.73645 16.3823 4.49997 17.4509 5.53111 18.2126C6.56226 18.9743 7.80808 19.3899 9.09 19.4C6.87 21.14 4.31 22.03 1.43 22.03C0.87 22.03 0.37 22 0 21.93C2.85 23.77 6 24.69 9.41 24.69C16.7 24.69 22.24 20.68 24.92 15.39C26.28 12.73 26.94 10.03 26.94 7.3V6.84C26.91 6.67 26.91 6.54 26.91 6.51C28.1173 5.646 29.1633 4.57637 30 3.35"
									fill="#222222"
								/>
							</svg>
						</div>
						<div>
							<svg
								width="15"
								height="15"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M30.7867 1.21333C29.9733 0.4 29.0133 0 27.8933 0H4.10667C2.97333 0 2.01333 0.4 1.21333 1.21333C0.413333 2.02667 0 2.98667 0 4.10667V27.8933C0 29.0267 0.4 29.9867 1.21333 30.7867C2.02667 31.5867 2.98667 32 4.10667 32H27.8933C29.0267 32 29.9867 31.6 30.7867 30.7867C31.5867 29.9733 32 29.0133 32 27.8933V4.10667C32 2.97333 31.6 2.01333 30.7867 1.21333ZM11.48 11.5333C12.7333 10.32 14.2533 9.70667 16.0133 9.70667C17.7867 9.70667 19.3067 10.32 20.56 11.5333C21.8133 12.7467 22.44 14.2133 22.44 15.9333C22.44 17.6533 21.8133 19.12 20.56 20.3333C19.3067 21.5467 17.7867 22.16 16.0133 22.16C14.2533 22.16 12.7333 21.5467 11.48 20.3333C10.2267 19.12 9.6 17.6533 9.6 15.9333C9.6 14.2133 10.2267 12.7467 11.48 11.5333ZM28.36 27.04C28.36 27.4 28.24 27.7067 27.9867 27.9467C27.8709 28.0662 27.732 28.161 27.5784 28.2252C27.4248 28.2894 27.2598 28.3216 27.0933 28.32H4.82667C4.6581 28.3227 4.49076 28.2909 4.33487 28.2268C4.17897 28.1626 4.03781 28.0673 3.92 27.9467C3.80117 27.8282 3.70792 27.6866 3.64599 27.5307C3.58407 27.3747 3.55481 27.2077 3.56 27.04V13.5333H6.49333C6.21541 14.4177 6.07598 15.3397 6.08 16.2667C6.08 18.9333 7.05333 21.2133 9 23.0933C10.9467 24.9733 13.28 25.92 16.0267 25.92C17.7778 25.9341 19.502 25.4881 21.0267 24.6267C22.5231 23.7973 23.7741 22.5877 24.6533 21.12C25.5359 19.6606 25.9974 17.9855 25.9867 16.28C25.9867 15.3333 25.84 14.4267 25.5733 13.5467H28.3867V27.04H28.36ZM28.36 8.44C28.36 8.84 28.2133 9.18667 27.9467 9.46667C27.8126 9.60172 27.6524 9.70802 27.4759 9.77909C27.2994 9.85016 27.1102 9.88449 26.92 9.88H23.2933C22.8933 9.88 22.5467 9.73333 22.2667 9.46667C22.1316 9.33261 22.0253 9.17243 21.9542 8.99591C21.8832 8.81939 21.8488 8.63024 21.8533 8.44V5C21.8533 4.61333 22 4.28 22.2667 3.98667C22.5333 3.69333 22.8933 3.56 23.2933 3.56H26.92C27.32 3.56 27.6667 3.70667 27.9467 3.98667C28.2267 4.26667 28.36 4.61333 28.36 5V8.44Z"
									fill="#222222"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			{/* )} */}
		</>
	);
};
