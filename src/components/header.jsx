import "./style/header.css";
import logo from "./img/Airbnb white.png";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DateMomentUtils from "@date-io/moment";
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
	return (
		<>
			<div className="header">
				<div className="header_main">
					<div>
						<img src={logo} className="header_logo"></img>
					</div>
					<div>hey</div>
					<div>hey</div>
				</div>

				<div className="booking_data">
					<div>
						<input placeholder="Location" className="header_input"></input>
					</div>
					<div className="sec">
						<MuiPickersUtilsProvider utils={DateMomentUtils} className="remove">
							<KeyboardDatePicker
								// invalidLabel="string"
								variant="inline"
								label="Basic example"
								clearLabel=""
								value={currentDate}
								onChange={setCurrentData}
							/>
						</MuiPickersUtilsProvider>
					</div>
					<div className="sec">
						<MuiPickersUtilsProvider utils={DateMomentUtils} className="remove">
							<DatePicker
								// invalidLabel="string"
								variant="inline"
								label="Basic example"
								clearLabel=""
								value={currentDate}
								onChange={setCurrentData}
								renderInput={(params) => <TextField {...params} />}
							/>
						</MuiPickersUtilsProvider>
					</div>
					<div>
						<p>Guest</p>
						{/* <p>Add Guest</p> */}
					</div>
				</div>
			</div>
			<h1 className="header1">components is also working</h1>

			{/* greast here_____________________ */}
			<div className="geast">
				<div className="adult">
					<div>
						Adults <br />
						Ages 13 or above
					</div>
					<div className="calculation">
						<div>+</div>
						<div>0</div>
						<div>-</div>
					</div>
				</div>
				<hr />
				<div className="adult">
					<div>
						Childern <br />
						Ages 2- 12
					</div>
					<div className="calculation">
						<div>+</div>
						<div>0</div>
						<div>-</div>
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
						<div>+</div>
						<div>0</div>
						<div>-</div>
					</div>
				</div>
				<hr />
				<p>
					If you're lucky enough to have more than 2 pets with you, be sure to
					let your host know.
				</p>
			</div>
		</>
	);
};
