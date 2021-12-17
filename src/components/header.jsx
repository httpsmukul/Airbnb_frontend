import "./style/header.css";
import logo from "./img/Airbnb white.png";
// import search from "./img/search.svg";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DateMomentUtils from "@date-io/moment";
import axios from "axios";
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
	const [adult, setadult] = useState(0);
	const [geast, setgeast] = useState("Add geast");
	const [location, setlocation] = useState(null);

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

	return (
		<>
			<div className="header">
				<div className="header_main">
					<div>
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
						<div>Become a host</div>
						<div>login</div>
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
			<h1>
				hey i am heersdfsfdsfsdfsdfsfsdfsfss f
				fffffffffffffffffffffffffffffffffffffffffff
			</h1>
		</>
	);
};
