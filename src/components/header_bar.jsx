import "./style/header_bar.css";
import logo from "./img/Airbnb Logo.png";
// import search from "./img/search.svg";
import React, { useState } from "react";
import axios from "axios";
import { Signup } from "./signup";
import { Signin } from "./signin";

export const Header_bar = () => {
	const [singshow, setsignshow] = useState(false);
	const [showsignup, setshowsignup] = useState(false);
	const [showsignin, setshowsignin] = useState(false);

	const [adult, setadult] = useState(0);

	const signdetail = () => {
		console.log("open sign");
		setsignshow(!singshow);
	};

	const signup = () => {
		console.log("signup");
		setshowsignup(!showsignup);
	};
	const login = () => {
		console.log("login");
		setshowsignin(!showsignin);
	};
	return (
		<>
			<div className="header">
				<div className="header_main">
					<div className="header_main_logo">
						<img src={logo} className="header_logo"></img>
					</div>
					<div className="header_text1">
						<div className="online_s">Start your search</div>
						<svg
							className="fix_se"
							width="33"
							height="33"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="12" fill="#FF5A5F" />
							<path
								d="M11.0061 8C11.8296 8 12.6194 8.34241 13.2017 8.9519C13.784 9.5614 14.1111 10.388 14.1111 11.25C14.1111 12.055 13.8293 12.795 13.3659 13.365L13.4949 13.5H13.8723L16.2607 16L15.5442 16.75L13.1557 14.25V13.855L13.0268 13.72C12.4822 14.205 11.7752 14.5 11.0061 14.5C10.1826 14.5 9.39286 14.1576 8.81056 13.5481C8.22826 12.9386 7.90112 12.112 7.90112 11.25C7.90112 10.388 8.22826 9.5614 8.81056 8.9519C9.39286 8.34241 10.1826 8 11.0061 8ZM11.0061 9C9.81189 9 8.85651 10 8.85651 11.25C8.85651 12.5 9.81189 13.5 11.0061 13.5C12.2004 13.5 13.1557 12.5 13.1557 11.25C13.1557 10 12.2004 9 11.0061 9Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="become">
						<div className="become1">
							Become a host
							<svg
								className="fix5"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.002 0.25C10.06 0.255827 12.0315 1.07784 13.4841 2.53567C14.9367 3.99349 15.7516 5.96804 15.75 8.026C15.7431 10.0372 14.9546 11.9669 13.5512 13.4074C12.1478 14.848 10.2393 15.6866 8.229 15.746L7.983 15.75C5.97144 15.7457 4.04035 14.9595 2.59786 13.5575C1.15537 12.1556 0.31451 10.2476 0.253 8.237L0.25 7.992C0.252121 5.93761 1.06985 3.96812 2.52346 2.51639C3.97707 1.06465 5.94761 0.249469 8.002 0.25ZM9.951 8.75H6.048C6.203 11.647 7.224 14.093 7.934 14.243L8.002 14.25C8.682 14.248 9.722 11.885 9.934 9.02L9.951 8.75ZM14.206 8.75H11.454C11.363 10.71 10.924 12.533 10.266 13.826C11.2809 13.4306 12.175 12.7771 12.8599 11.9302C13.5448 11.0832 13.9967 10.0722 14.171 8.997L14.206 8.75ZM4.545 8.75H1.795C1.93102 9.87243 2.36864 10.937 3.06134 11.8306C3.75404 12.7242 4.67592 13.4134 5.729 13.825C5.114 12.617 4.693 10.95 4.567 9.139L4.545 8.749V8.75ZM5.733 2.174L5.618 2.22C4.59179 2.64383 3.69685 3.33309 3.02501 4.21704C2.35318 5.10099 1.92865 6.14779 1.795 7.25H4.545C4.63 5.42 5.016 3.71 5.604 2.44L5.733 2.174ZM7.995 1.75C7.293 1.752 6.211 4.262 6.048 7.25H9.952C9.796 4.347 8.774 1.907 8.06 1.756L7.995 1.749V1.75ZM10.275 2.182L10.298 2.232C10.941 3.52 11.367 5.316 11.455 7.25H14.203C14.0644 6.13 13.6262 5.06812 12.9348 4.17621C12.2433 3.2843 11.3241 2.59538 10.274 2.182H10.275Z"
									fill="#222222"
								/>
							</svg>
						</div>

						<div className="">
							<div className="become2" onClick={signdetail}>
								nlogi
								<svg
									className="login_svg1"
									width="14"
									height="10"
									viewBox="0 0 14 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 0H14V1.55556H0V0ZM0 3.88889H14V5.44444H0V3.88889ZM0 7.77778H14V9.33333H0V7.77778Z"
										fill="black"
									/>
								</svg>
								<svg
									className="login_svg2"
									width="27"
									height="27"
									viewBox="0 0 27 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.3333 22.9333C10 22.9333 7.05333 21.2267 5.33333 18.6667C5.37333 16 10.6667 14.5333 13.3333 14.5333C16 14.5333 21.2933 16 21.3333 18.6667C19.6133 21.2267 16.6667 22.9333 13.3333 22.9333ZM13.3333 4C14.3942 4 15.4116 4.42143 16.1618 5.17157C16.9119 5.92172 17.3333 6.93913 17.3333 8C17.3333 9.06087 16.9119 10.0783 16.1618 10.8284C15.4116 11.5786 14.3942 12 13.3333 12C12.2725 12 11.2551 11.5786 10.5049 10.8284C9.75476 10.0783 9.33333 9.06087 9.33333 8C9.33333 6.93913 9.75476 5.92172 10.5049 5.17157C11.2551 4.42143 12.2725 4 13.3333 4ZM13.3333 0C11.5824 0 9.84856 0.344877 8.23089 1.01494C6.61321 1.685 5.14336 2.66713 3.90524 3.90524C1.40476 6.40573 0 9.79711 0 13.3333C0 16.8696 1.40476 20.2609 3.90524 22.7614C5.14336 23.9995 6.61321 24.9817 8.23089 25.6517C9.84856 26.3218 11.5824 26.6667 13.3333 26.6667C16.8696 26.6667 20.2609 25.2619 22.7614 22.7614C25.2619 20.2609 26.6667 16.8696 26.6667 13.3333C26.6667 5.96 20.6667 0 13.3333 0Z"
										fill="#333333"
										fill-opacity="0.58"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				{showsignup && <Signup></Signup>}
				{showsignin && <Signin></Signin>}
			</div>
			{/* <h1 className="header1">components is also working</h1> */}

			{/* greast here_____________________ */}

			{/* till here______________________________________________ */}
			{/* //here start login popup______________________________ */}
			{singshow && (
				<div className="signdetail">
					<div onClick={signup}>Sign up</div>
					<hr />
					<div onClick={login}>Log in</div>
					<hr />

					<div>Host your home</div>
					<hr />

					<div>Host an expreience</div>
					<hr />

					<div>Help</div>
				</div>
			)}
			{/* {till here _______________________________________________} */}
			{/* sign up ______________________________ */}

			{/* till here _________________________________ */}
			<h1>
				hey i am heersdfsfdsfsdfsdfsfsdfsfss f
				fffffffffffffffffffffffffffffffffffffffffff
			</h1>
		</>
	);
};
