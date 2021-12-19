import { Route, Switch } from "react-router-dom";
import { HotelList } from "./HotelList/HotelList";
import { Payment } from "./Payment/Payment";
import { PaymentCard } from "./Payment/PaymentCard/PaymentCard";
import { Header } from "./header";
import { Hotel } from "./Hotel.jsx";
import { Signin } from "./signin";
import { Signup } from "./signup";
import { Final } from "./final";
import { HotelDescription } from "./HotelDescription/HotelDescription";

export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Header />
				</Route>
				<Route exact path="/hotellist">
					<HotelList />
				</Route>
				<Route exact path="/payment">
					<Payment />
				</Route>
				<Route exact path="/paymentcard">
					<PaymentCard />
				</Route>

				<Route exact path="/Signup">
					<Signup />
				</Route>
				<Route exact path="/Signin">
					<Signin />
				</Route>
				<Route exact path="/final">
					<Final />
				</Route>
				<Route path="/hotellist/:id">
					<HotelDescription />
				</Route>
			</Switch>
		</div>
	);
};
