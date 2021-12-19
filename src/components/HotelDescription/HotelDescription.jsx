import React from 'react'
import styles from './HotelDescription.module.css'
import { Headerbar } from '../Headerbar/header_bar'
import { Link } from 'react-router-dom'
import home from './imgs/home.svg'
import self from './imgs/self.svg'
import great from './imgs/great.svg'
import enhance from './imgs/enhance.svg'
import car from './imgs/car.svg'
import smoke from './imgs/smoke.svg'
import wifi from './imgs/wifi.svg'
import work from './imgs/work.svg'
import kitchen from './imgs/kitchen.svg'
import wash from './imgs/wash.svg'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


export const HotelDescription = () => {
    const { id } = useParams();

    const [hotel, setHotel] = useState([]);
    useEffect(() => {
        // fetch("https://reqres.in/api/users?page=2")
        fetch(`http://localhost:3001/hotels/${id}`)
            .then((x) => x.json())
            .then((d) => {
                console.log(d);
                setHotel(d);
            });
    }, [id]);
    // const [hotels, setHotels] = useState([]);
    // useEffect(() => {
    //     // fetch("https://reqres.in/api/users?page=2")
    //     fetch("http://localhost:3001/hotels/")
    //         .then((x) => x.json())
    //         .then((d) => {
    //             console.log(d);
    //             setHotels(d);
    //         });
    // }, []);

    return (
        <>
            <Headerbar />
            <div className={styles.mainDiv}>
                <p style={{ textAlign: "left" }} ><span className={styles.top}> {hotel.name}</span> <br /><span style={{ color: "#030303", fontWeight: "bold" }} > <img src="https://i.ibb.co/74vdMcL/Love-Shape.png" alt="like" /> {hotel.rating} . </span><span style={{ fontWeight: "500" }}>{hotel.reviews} reviews,</span> <span>{hotel.location}</span> </p>
                <div>
                    <div className={styles.left}>
                        <img src={hotel.image} alt="" />
                    </div>
                    <div className={styles.right}>
                        <img src="https://a0.muscache.com/im/pictures/dbd7f0ac-e32b-45c6-9a3a-41d7a04f6d55.jpg?im_w=720" alt="" />
                        <img src="https://a0.muscache.com/im/pictures/dbd7f0ac-e32b-45c6-9a3a-41d7a04f6d55.jpg?im_w=720" alt="" />
                        <img src="https://a0.muscache.com/im/pictures/dbd7f0ac-e32b-45c6-9a3a-41d7a04f6d55.jpg?im_w=720" alt="" />
                        <img src="https://a0.muscache.com/im/pictures/dbd7f0ac-e32b-45c6-9a3a-41d7a04f6d55.jpg?im_w=720" alt="" />
                    </div>

                </div>
                <div>
                    <p className={styles.aman}><span style={{ fontSize: "22px", fontWeight: "600" }}>{hotel.type}</span> <br />{hotel.guests} guests . {hotel.rooms} </p>
                    {/* <div>
                        {hotels.map((e, i) => (
                            <div key={i} >
                                {" "}
                                <Link to={`/payment/${e.id}`}>
                                    <img className={styles.dateimg} src="https://i.ibb.co/VV6nh48/date1.png" alt="" />
                                </Link>
                            </div>
                        ))}
                    </div> */}
                    <Link to='/payment'>  <img className={styles.dateimg} src="https://i.ibb.co/VV6nh48/date1.png" alt="" /></Link>
                </div>
                <hr style={{ width: "60%" }} />
                <div>
                    <img className={styles.smallicon} src={home} alt="" />
                    <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "600" }}>Entire Home</span> <br />You’ll have the apartment to yourself.</p>
                </div>
                <div>
                    <img className={styles.smallicon} src={enhance} alt="" />
                    <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "600" }}>Enhanced Clean</span> <br />This host has committed to Airbnb's 5-step enhanced cleaning process.</p>
                </div>
                <div>
                    <img className={styles.smallicon} src={self} alt="" />
                    <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "600" }}>Self check-in</span> <br />Check yourself in with the lockbox.</p>
                </div>
                <div>
                    <img className={styles.smallicon} src={great} alt="" />
                    <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "600" }}>Great check-in experience</span> <br />100% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
                <hr style={{ width: "60%", float: "left" }} />
                <br />
                <p className={styles.para}>At Happy Homes, you find decent, clean, hygienic rooms with proper lightings along with <br /> night lamps in rooms. You have rooms with private washrooms. These are 2 BHKs with<br /> separate rooms and living area and a kitchenette on request if you are staying long term.<br /> Both the rooms have split AC.</p>
                <p className={styles.para}>These are homestays and not service apartments. Hence no room service will be...</p>
                <Link className={styles.showmore}>Show more..</Link>
                <hr style={{ clear: "both", width: "60%", float: "left" }} />
                <br />
                <p className={styles.place} >What this place offers</p>
                <div className={styles.offers}>
                    <div>
                        <img className={styles.smallicon} src={kitchen} alt="" />
                        <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "400" }}>Kitchen</span></p>
                    </div>
                    <div>
                        <img className={styles.smallicon} src={car} alt="" />
                        <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "400" }}>Free parking on premises</span></p>
                    </div>
                    <div>
                        <img className={styles.smallicon} src={smoke} alt="" />
                        <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "400" }}>Smoking allowed</span></p>
                    </div>
                    <div>
                        <img className={styles.smallicon} src={wifi} alt="" />
                        <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "400" }}>Wifi</span></p>

                    </div>
                    <div>
                        <img className={styles.smallicon} src={wash} alt="" />
                        <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "400" }}>Washing Machine</span></p>
                    </div>
                    <div>
                        <img className={styles.smallicon} src={work} alt="" />
                        <p className={styles.home}><span style={{ fontSize: "16px", fontWeight: "400" }}>Dedicated Workspace</span></p>
                    </div>
                </div>
            </div>
            <img className={styles.rev} src="https://i.ibb.co/tsy3pjt/review1.png" alt="" />
            <img className={styles.rev} src="https://i.ibb.co/2j8LC4r/explore1.png" alt="" />
            <img className={styles.rev} src="https://i.ibb.co/W6qmCgr/footer1.png" alt="" />



        </>
    )
}

