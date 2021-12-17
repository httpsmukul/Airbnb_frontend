import "./style/header.css";
import logo from "./img/Airbnb white.png";
// import search from "./img/search.svg";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DateMomentUtils from "@date-io/moment";
import axios from "axios";
import { Signup } from "./signup";
import { Signin } from "./signin";
import {
	TimePicker,
	DatePicker,
	DateTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import "./style/cal.css";

export const Header = () => {
	const [currentDate, setCurrentData] = useState(null);
	const [checkout, setcheckout] = useState(null);
	const [show, setshow] = useState(false);
	const [singshow, setsignshow] = useState(false);
	const [showsignup, setshowsignup] = useState(false);
	const [showsignin, setshowsignin] = useState(false);

	const [adult, setadult] = useState(0);
	const [geast, setgeast] = useState("Add geast");
	const [location, setlocation] = useState(null);

	const signdetail = () => {
		console.log("open sign");
		setsignshow(!singshow);
	};

	const data_store = () => {
		console.log("working on data_stre");
		axios
			.post("http://localhost:3001/user", {
				Location: location,
				checkIn: currentDate,
				checkOut: checkout,
				Geast: geast,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const Handlex = () => {
		setshow(!show);
	};
	const handeladd = () => {
		console.log("working");
		setadult(adult + 1);
		setgeast("adult " + (adult + 1));
	};
	const handelsub = () => {
		console.log("working");
		setadult(adult - 1);
		setgeast("adult " + (adult - 1));
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
						<div>
							Places to stay
							<br />
							<hr className="hr" />
						</div>
						<div className="exper">Experiences</div>
						<div className="online">Online Experiences</div>
					</div>
					<div className="become">
						<div className="become1">
							Become a host
							<svg
								className="svghost"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.6337 10.6667C12.7003 10.1167 12.7503 9.56667 12.7503 9.00001C12.7503 8.43334 12.7003 7.88334 12.6337 7.33334H15.4503C15.5837 7.86667 15.667 8.42501 15.667 9.00001C15.667 9.57501 15.5837 10.1333 15.4503 10.6667H12.6337ZM11.1587 15.3C11.6587 14.375 12.042 13.375 12.3087 12.3333H14.767C13.967 13.7083 12.692 14.775 11.1587 15.3ZM10.9503 10.6667H7.05033C6.96699 10.1167 6.91699 9.56667 6.91699 9.00001C6.91699 8.43334 6.96699 7.87501 7.05033 7.33334H10.9503C11.0253 7.87501 11.0837 8.43334 11.0837 9.00001C11.0837 9.56667 11.0253 10.1167 10.9503 10.6667ZM9.00033 15.6333C8.30866 14.6333 7.75033 13.525 7.40866 12.3333H10.592C10.2503 13.525 9.69199 14.6333 9.00033 15.6333ZM5.66699 5.66667H3.23366C4.02533 4.28334 5.30866 3.21667 6.83366 2.70001C6.33366 3.62501 5.95866 4.62501 5.66699 5.66667ZM3.23366 12.3333H5.66699C5.95866 13.375 6.33366 14.375 6.83366 15.3C5.30866 14.775 4.02533 13.7083 3.23366 12.3333ZM2.55033 10.6667C2.41699 10.1333 2.33366 9.57501 2.33366 9.00001C2.33366 8.42501 2.41699 7.86667 2.55033 7.33334H5.36699C5.30033 7.88334 5.25033 8.43334 5.25033 9.00001C5.25033 9.56667 5.30033 10.1167 5.36699 10.6667H2.55033ZM9.00033 2.35834C9.69199 3.35834 10.2503 4.47501 10.592 5.66667H7.40866C7.75033 4.47501 8.30866 3.35834 9.00033 2.35834ZM14.767 5.66667H12.3087C12.042 4.62501 11.6587 3.62501 11.1587 2.70001C12.692 3.22501 13.967 4.28334 14.767 5.66667ZM9.00033 0.666672C4.39199 0.666672 0.666992 4.41667 0.666992 9.00001C0.666992 11.2101 1.54497 13.3298 3.10777 14.8926C3.88159 15.6664 4.80025 16.2802 5.8113 16.699C6.82234 17.1178 7.90598 17.3333 9.00033 17.3333C11.2105 17.3333 13.3301 16.4554 14.8929 14.8926C16.4557 13.3298 17.3337 11.2101 17.3337 9.00001C17.3337 7.90566 17.1181 6.82202 16.6993 5.81098C16.2805 4.79993 15.6667 3.88127 14.8929 3.10745C14.1191 2.33363 13.2004 1.7198 12.1894 1.30101C11.1783 0.88222 10.0947 0.666672 9.00033 0.666672Z"
									fill="white"
								/>
							</svg>
						</div>

						<div className="">
							<div className="become2" onClick={signdetail}>
								login
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

				<div className="booking_data">
					<div className="setgeast">
						<input
							placeholder="Location"
							className="header_input"
							onChange={(e) => setlocation(e.target.value)}
						></input>
					</div>
					<hr />

					<div className="sec">
						<MuiPickersUtilsProvider utils={DateMomentUtils} className="remove">
							<KeyboardDatePicker
								// invalidLabel="string"

								variant="inline"
								label="Check in"
								clearLabel=""
								value={currentDate}
								onChange={setCurrentData}
							/>
						</MuiPickersUtilsProvider>
					</div>
					<hr />

					<div className="sec">
						<MuiPickersUtilsProvider utils={DateMomentUtils} className="remove">
							<KeyboardDatePicker
								// invalidLabel="string"
								variant="inline"
								label="Check out"
								clearLabel=""
								value={checkout}
								onChange={setcheckout}
							/>
						</MuiPickersUtilsProvider>
					</div>
					<hr />
					<div className="geast_search">
						<button className="geast_button" onClick={Handlex}>
							Guest
							<div className="add_geast">{geast}</div>
						</button>
						<div className="search" onClick={data_store}>
							<svg
								className="search_svg"
								width="18"
								height="15"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 0C8.72391 0 10.3772 0.684819 11.5962 1.90381C12.8152 3.12279 13.5 4.77609 13.5 6.5C13.5 8.11 12.91 9.59 11.94 10.73L12.21 11H13L18 16L16.5 17.5L11.5 12.5V11.71L11.23 11.44C10.09 12.41 8.61 13 7 13C5.27609 13 3.62279 12.3152 2.40381 11.0962C1.18482 9.87721 0.5 8.22391 0.5 6.5C0.5 4.77609 1.18482 3.12279 2.40381 1.90381C3.62279 0.684819 5.27609 0 7 0V0ZM7 2C4.5 2 2.5 4 2.5 6.5C2.5 9 4.5 11 7 11C9.5 11 11.5 9 11.5 6.5C11.5 4 9.5 2 7 2Z"
									fill="white"
								/>
							</svg>
							search
						</div>
						{/* <p>Add Guest</p> */}
					</div>
				</div>
			</div>
			{/* <h1 className="header1">components is also working</h1> */}

			{/* greast here_____________________ */}
			{show && (
				<div>
					<div className="geast">
						<div className="adult">
							<div>
								Adults <br />
								Ages 13 or above
							</div>
							<div className="calculation">
								<button className="plus" onClick={handelsub}>
									-
								</button>
								<div>{adult}</div>
								<button className="plus" onClick={handeladd}>
									+
								</button>
							</div>
						</div>
						<hr />
						<div className="adult">
							<div>
								Childern <br />
								Ages 2- 12
							</div>
							<div className="calculation">
								<button className="plus">-</button>
								<div>0</div>
								<button className="plus">+</button>
							</div>
						</div>
						<hr />
						<div className="adult">
							<div>
								Infants
								<br />
								Under 2
							</div>
							<div className="calculation">
								<button className="plus">-</button>
								<div>0</div>
								<button className="plus">+</button>
							</div>
						</div>
						<hr />
						<p className="text">
							If you're lucky enough to have more than 2 pets with you, be sure
							to let your host know.
						</p>
					</div>
				</div>
			)}
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

			{showsignup && <Signup></Signup>}
			{showsignin && <Signin></Signin>}

			{/* till here _________________________________ */}
			<h1>
				hey i am heersdfsfdsfsdfsdfsfsdfsfss f
				fffffffffffffffffffffffffffffffffffffffffff
			</h1>
		</>
	);
};
