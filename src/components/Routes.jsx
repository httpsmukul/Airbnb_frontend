import { Route, Switch } from "react-router-dom";
import { HotelList } from './HotelList/HotelList'
import { Payment } from './Payment/Payment'
import { PaymentCard } from "./Payment/PaymentCard/PaymentCard";
import { Header } from './header'


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
            </Switch>
        </div>
    );
};