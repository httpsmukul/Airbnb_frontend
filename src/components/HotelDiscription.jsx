import React from "react";
import vector from "../Assets/vector.svg";
import share from "../Assets/share.svg";
import img_1 from "../Assets/img-1.svg";
import "./style.css";
export const HotelDiscription = () => {
	return (
		<div className="main-container">
			<div>
				<div className="hotelName">Hotel name</div>
				<div className="hotelNameBox">
					<div className="location">Location Name</div>
					<div className="smallbox">
						<div className="smallbox">
							<img className="vector-img" src={vector} alt="vector" />
							<div className="save-vector">Save</div>
						</div>
						<div className="smallbox">
							<img className="vector-img" src={share} alt="share" />
							<div className="save-vector">Share</div>
						</div>
					</div>
				</div>
			</div>
			<div className="des-img-box">
				<div className="img-left-box">
					<img className="img-left" src={img_1} alt="img1" />
				</div>
				<div>
					<div className="right-box">
						<div className="img-small">
							<img src={img_1} alt="img" />
						</div>
						<div className="img-small">
							<img className="img-end-up" src={img_1} alt="img" />
						</div>
					</div>
					<div className="right-box">
						<div className="img-small">
							<img className="img" src={img_1} alt="img" />
						</div>
						<div className="img-small">
							<img className="img-end-down" src={img_1} alt="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// export default HotelDiscription
