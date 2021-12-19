import React from "react";
import Stylee from "./Middleimg.module.css";
import myImg from "../Photos/firstphoto.jpg";
import myImge from "../Photos/secondphoto.jpg";
import lastimg from "../Photos/lastimg.jpg";
import footer from "../Photos/footer.jpeg";

function Middleimg() {
	return (
		<span>
			<div className={Stylee.container}>
				<div className={Stylee.iamg}>
					<img
						style={{ borderRadius: "20px" }}
						src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fa0.muscache.com%2Fim%2Fpictures%2Ffe7217ff-0b24-438d-880d-b94722c75bf5.jpg"
						alt="firstimg"
					/>
					<div className={Stylee.names}>
						<h1 style={{ textAlign: "right" }}>
							Not sure where to go? Perfect.
						</h1>
						<button>I am flexible</button>
					</div>
				</div>
			</div>

			<p>
				<h1>Discover Airbnb Experiences</h1>
				<div className={Stylee.contain}>
					<div className={Stylee.box1}>
						<img
							className={Stylee.borders}
							src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=240"
						/>
						<h1 style={{ marginLeft: "5%" }}>Lonavala</h1>
						<h4 style={{ marginLeft: "5%" }}>66 Kilometers away</h4>
					</div>
					<div className={Stylee.box2}>
						<img
							className={Stylee.borders}
							src="https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_w=240"
						/>
						<h1 style={{ marginLeft: "5%" }}>Karjat</h1>
						<h4 style={{ marginLeft: "5%" }}>53 Kilometers away</h4>
					</div>
					<div className={Stylee.box3}>
						<img
							className={Stylee.borders}
							src="https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_w=240"
						/>
						<h1 style={{ marginLeft: "5%" }}>Calangute</h1>
						<h4 style={{ marginLeft: "5%" }}>396 Kilometers away</h4>
					</div>
					<div className={Stylee.box4}>
						<img
							className={Stylee.borders}
							src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240"
						/>
						<h1 style={{ marginLeft: "5%" }}>Mahabaleshwar</h1>
						<h4 style={{ marginLeft: "5%" }}>145 Kilometers away</h4>
					</div>
				</div>
			</p>

			<h1 style={{ marginLeft: "10%", marginBottom: "5%" }}>
				Discover Airbnb Experiences
			</h1>
			<div className={Stylee.twoimg}>
				<img
					className={Stylee.twoimages}
					style={{ marginLeft: "10%" }}
					src={myImge}
					alt="one"
				/>
				<img
					className={Stylee.twoimages}
					style={{ marginLeft: "2%" }}
					src={myImg}
					alt="two"
				/>
				<div className={Stylee.namebtn}>
					<h1>
						Things to do
						<br /> on your trip
					</h1>
					<button>Experiences</button>
				</div>
				<div className={Stylee.namebtns}>
					<h1>
						Things to do
						<br /> from home
					</h1>
					<button>Online Experiences</button>
				</div>
			</div>
			<div className={Stylee.last}>
				<img
					style={{ width: "100%", height: "590px" }}
					src={lastimg}
					alt="last"
				/>
				<div className={Stylee.namebuton}>
					<h1 style={{ fontSize: "400%", marginLeft: "7%" }}>
						<b>Questions</b>
						<br />
						about
						<br />
						hosting?
					</h1>
					<br />
					<br />
					<button
						style={{ marginLeft: "7%", paddingLeft: "2%", paddingRight: "2%" }}
					>
						<b>Ask a Superhost</b>
					</button>
				</div>
				<img
					style={{ width: "100%", height: "400px", marginTop: "10%" }}
					src={footer}
					alt="footer"
				/>
			</div>
		</span>
	);
}

export { Middleimg };
