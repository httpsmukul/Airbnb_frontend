import React, { useState } from "react";
import DateMomentUtils from "@date-io/moment";
import {
	TimePicker,
	DateTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import "./style/cal.css";

function Day() {
	const [currentDate, setCurrentData] = useState(new Date());
	return (
		<div className="App">
			<MuiPickersUtilsProvider utils={DateMomentUtils} className="app">
				<KeyboardDatePicker
					// invalidLabel="string"
					variant="inline"
					label="Basic example"
					clearLabel=""
					value={currentDate}
					onChange={setCurrentData}
				/>
				{/* <TimePicker value={currentDate} onChange={setCurrentData} /> */}
				{/* <DateTimePicker value={currentDate} onChange={setCurrentData} /> */}
			</MuiPickersUtilsProvider>
		</div>
	);
}

export default Day;
