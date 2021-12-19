import styles from "./PaymentCard.module.css";
import logo from "../../../images/airbnblogo.svg";
import back from "../../../images/backButton.svg";
import hotelImage from "../../../images/hotel_image.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import footer from "../../../images/paymentfooter1.png";

export const PaymentCard = () => {
	return (
		<>
			<div className={styles.nav}>
				{/* <h1>Welcome to Payment Page</h1> */}
				<Link to="/">
					<img className={styles.logo} src={logo} alt="AirBNB" />
				</Link>
			</div>
			<div className={styles.confirm}>
				<div className={styles.pay}>
					<Link to="payment">
						<img className={styles.backButton} src={back} alt="Back" />
					</Link>
					<p className={styles.payText}>Confirm and pay</p>
				</div>
			</div>
			<div className={styles.mainDiv}>
				<div className={styles.leftDiv}>
					<div className={styles.left1}>
						<label htmlFor="html">New Card</label>
						<br />
						<input
							className={styles.input}
							type="text"
							placeholder="Enter Card Number"
						/>
						<div style={{ float: "left" }}>
							<label htmlFor="html">Expiry</label>
							<br />
							<input
								className={styles.input2}
								type="number"
								placeholder="MM/YY"
							/>
						</div>
						<div style={{ float: "right" }}>
							<label htmlFor="html">CVV</label>
							<br />
							<input
								className={styles.input3}
								type="number"
								placeholder="Enter CVV"
							/>
						</div>
						<div style={{ clear: "both" }}>
							<label htmlFor="html">Name on Card</label>
							<br />
							<input
								className={styles.input}
								type="text"
								placeholder="Enter Name on Card"
							/>
						</div>
						<div className={styles.check}>
							<input type="checkbox" id="check" />
							<label for="check">
								Save this option securly for faster payment
							</label>
						</div>
						<Link to="/final">
							<Button className={styles.payButton} variant="contained">
								Proceed
							</Button>
						</Link>
					</div>
				</div>
				<div className={styles.rightDiv}>
					<div className={styles.data}>
						<img className={styles.image} src={hotelImage} alt="Hotel Logo" />
						<p>Entire apartment</p>
						<p
							style={{ fontWeight: "400", color: "#585858", fontSize: "16px" }}
						>
							The Himalayan Pine
						</p>
						<p className={styles.rating}>
							<span style={{ color: "#030303", fontWeight: "bold" }}>
								{" "}
								<img
									src="https://i.ibb.co/74vdMcL/Love-Shape.png"
									alt="like"
								/>{" "}
								4.8
							</span>
							(12 reviews)
						</p>
					</div>
					<p className={styles.right1}>Price details</p>
					<div className={styles.right11}>
						<div style={{ textAlign: "left" }}>
							<p>₹ 2,333 x 3 nights</p>
							<p>Service fee</p>
							<p>Occupancy taxes and fees</p>
						</div>
						<div style={{ textAlign: "right" }}>
							<p>₹ 6,999</p>
							<p>₹ 1,399</p>
							<p>₹ 799</p>
						</div>
					</div>
					<div className={styles.right111}>
						<p>Total</p>
						<p>₹ 9,197</p>
					</div>
				</div>
			</div>
			<div>
				<img className={styles.footer} src={footer} alt="Footer" />
			</div>
		</>
	);
};
