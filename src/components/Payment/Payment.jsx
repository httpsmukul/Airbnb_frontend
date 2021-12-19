import logo from '../../images/airbnblogo.svg'
import styles from './Payment.module.css'
import back from '../../images/backButton.svg'
import masterCard from '../../images/masterCardLogo.svg'
import visaCard from '../../images/visaCardLogo.svg'
import amexCard from '../../images/amexCardLogo.svg'
import Button from '@mui/material/Button';
import hotelImage from '../../images/hotel_image.png'
import footer from '../../images/paymentfooter1.png'
import { Link } from 'react-router-dom'

export const Payment = () => {
    return (
        <>
            <div className={styles.nav}>
                {/* <h1>Welcome to Payment Page</h1> */}
                <img className={styles.logo} src={logo} alt="AirBNB" />
            </div>

            <div className={styles.confirm}>
                <div className={styles.pay}>
                    <img className={styles.backButton} src={back} alt="Back" />
                    <p className={styles.payText} >Confirm and pay</p>
                </div>
            </div>
            <div className={styles.mainDiv}>
                <div className={styles.leftDiv}>
                    <p className={styles.left1}>Your trip</p>
                    <div className={styles.left11}>
                        <div className={styles.left12}>
                            <p className={styles.bold}>Dates</p>
                            <p>17-18 Dec</p>
                        </div>
                        {/* <a className={styles.left13} href="#">Edit</a> */}
                        <Link to='' className={styles.left13}>Edit</Link>
                    </div>
                    <div className={styles.left11}>
                        <div className={styles.left12}>
                            <p className={styles.bold}>Check-in time</p>
                            <p>4:00 pm - 6:00 pm</p>
                        </div>
                        {/* <a className={styles.left13} href="#">Edit</a> */}
                        <Link to='' className={styles.left13}>Edit</Link>
                    </div>
                    <div className={styles.left11}>
                        <div className={styles.left12}>
                            <p className={styles.bold}>Guests</p>
                            <p>1 guest</p>
                        </div>
                        {/* <a className={styles.left13} href="#">Edit</a> */}
                        <Link to='' className={styles.left13}>Edit</Link>
                    </div>
                    <hr />
                    <div className={styles.left11}>
                        <p className={styles.paywith}>Pay with</p>
                        <div style={{ marginTop: '26px' }}>
                            <img className={styles.cardimg} src={masterCard} alt="master card" />
                            <img className={styles.cardimg} src={visaCard} alt="visa card" />
                            <img className={styles.cardimg} src={amexCard} alt="amex card" />

                        </div>
                    </div>
                    <div >
                        <select className={styles.card} name="payment method" id="">
                            <option className={styles.option} value="Card">Credit or Debit Card</option>
                        </select>
                    </div>
                    <div>
                        {/* <a className={styles.coupon} href="#">Enter a coupon</a> */}
                        <Link to='' className={styles.coupon}>Enrer a coupon</Link>
                    </div>
                    <hr />
                    <p className={styles.left1}>Cancellation Policy</p>
                    <p className={styles.cancel}>Non-refundable: Cancel before check-in and get back only the cleaning fee, if you've paid one. <span><Link>Learn more</Link></span> </p>
                    <br />
                    <p className={styles.cancel}>Our Extenuating Circumstances policy does not cover travel disruptions caused by COVID-19.<span><Link>Learn more</Link></span></p>
                    <hr style={{ marginTop: '20px', marginBottom: "20px" }} />
                    <p className={styles.refund}>By selecting the button below, I agree to the <span><Link>Host's House Rules, Airbnb's COVID-19 Safety Requirements</Link></span> and the <span><Link>Guest Refund Policy.</Link></span></p>
                    <Button className={styles.payButton} variant="contained"><Link className={styles.paybtn} to='/paymentcard'>Confirm and pay</Link></Button>
                </div>
                <div className={styles.rightDiv}>
                    <div className={styles.data}>
                        <img className={styles.image} src={hotelImage} alt="Hotel Logo" />
                        <p>Entire apartment</p>
                        <p style={{ fontWeight: '400', color: "#585858", fontSize: '16px' }} >The Himalayan Pine</p>
                        <p className={styles.rating} ><span style={{ color: "#030303", fontWeight: "bold" }} > <img src="https://i.ibb.co/74vdMcL/Love-Shape.png" alt="like" /> 4.8</span>(12 reviews)</p>
                    </div>
                    <p className={styles.right1}>Price details</p>
                    <div className={styles.right11}>
                        <div style={{ textAlign: 'left' }}>
                            <p>₹ 2,333 x 3 nights</p>
                            <p>Service fee</p>
                            <p>Occupancy taxes and fees</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
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


    )
}