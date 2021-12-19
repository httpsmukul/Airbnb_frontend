import { useState, useEffect } from "react";
import styles from "./HotelList.module.css"
import { Link } from "react-router-dom"
import { Maps } from "../Map/Gmaps"
import { Headerbar } from '../Headerbar/header_bar'

export const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        // fetch("https://reqres.in/api/users?page=2")
        fetch("http://localhost:3001/hotels/")
            .then((x) => x.json())
            .then((d) => {
                console.log(d);
                setHotels(d);
            });
    }, []);


    return (
        <>
            <Headerbar />
            <div className={styles.leftdiv} >
                {/* <h2>Hotels List</h2> */}
                {hotels.map((e, i) => (
                    <div key={i} >
                        {" "}
                        <Link to={`/hotellist/${e.id}`}>
                            <div className={styles.data}>
                                <img className={styles.image} src={e.image} alt="Hotel Logo" />
                                <p>{e.type}</p>
                                <h3 style={{ fontWeight: '400', color: "#585858" }} >{e.name}</h3>
                                <p className={styles.line}>{e.guests} guests . {e.rooms}</p>
                                <p>{e.facility}</p>
                                <p style={{ color: "#030303" }}>{e.location}</p>
                                <p style={{ marginTop: "50px", float: 'left', color: '#727272' }} className={styles.line} ><span style={{ color: "#030303" }} className={styles.bold}> <img src="https://i.ibb.co/74vdMcL/Love-Shape.png" alt="like" /> {e.rating}</span>({e.reviews} reviews)</p>
                                <p style={{ float: 'right', marginTop: "60px", color: "#727272" }}><span style={{ color: "#030303" }} className={styles.bold}>₹{e.rate}</span>/night</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.div}>
                <Maps className={styles.map} />
            </div>
            <img className={styles.footer} src="https://i.ibb.co/C1NdSdH/footer1.png" alt="" />
        </>
    )
}