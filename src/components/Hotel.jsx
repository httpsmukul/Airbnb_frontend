import React from "react";
import AboutHost from "./AboutHost";
import { HotelDiscription } from "./HotelDiscription";
import { Header_bar } from "./header_bar";

export const Hotel = () => {
	return (
		<>
			<Header_bar></Header_bar>
			<HotelDiscription />
			<AboutHost />
		</>
	);
};
