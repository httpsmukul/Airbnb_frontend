import React from 'react'
import Host_img from "../Assets/Host-img.svg"
import star from "../Assets/star.svg"
import cal from "../Assets/calender.svg"
import locker from "../Assets/locker.svg"
import wifilogo from "../Assets/wifi.svg"
import petlogo from "../Assets/pets.svg"
import breakfastlogo from "../Assets/breakfast.svg"
import workspacelogo from "../Assets/workspace.svg"
import carbonlogo from "../Assets/alarm.svg"
import parkinglogo from "../Assets/parking.svg"
import dryerlogo from "../Assets/hairdryer.svg"
import smokingallowlogo from "../Assets/smokeallow.svg"
import smokealarmlogo from "../Assets/smokealarm.svg"
import longtermallowlogo from "../Assets/longstay.svg"
import handwashlogo from "../Assets/handwashlogo.svg"
import timerlogo from "../Assets/timerlogo.svg"
import ques_mark_logo from "../Assets/questionlogo.svg"
import sec_img from "../Assets/security-1.svg"
import map_img from "../Assets/map.svg"

const AboutHost = () => {
    return (
        <div>
            <div className='Host'>
                <div >
                    <div className='host-name'>Room in hotel hosted by Vishal</div>
                    <div className='host-res'> 3 guests, 1 bedroom, 1 bed, 15 bathrooms </div>
                </div>
                <div className="host-img"><img src={Host_img} alt="img" /></div>
            </div>
            <div>
                <div className='star-box'>
                    <div className='star-tag'>
                        <img src={star} alt='' />
                    </div>
                    <div className='enhanced-clean'>
                        <div>Enhanced Clean</div>
                        <div className='text-detail'>This host has committed to Airbnb's 5-step enhanced cleaning process.</div>
                    </div>
                </div>
                <div className='star-box'>
                    <div className='star-tag'>
                        <img src={cal} alt='' />
                    </div>
                    <div className='enhanced-clean'>
                        <div>Great check-in experience</div>
                        <div className='text-detail'>92% of recent guests gave the check-in process a 5-star rating.</div>
                    </div>
                </div>
                <div className='star-box'>
                    <div className='star-tag'>
                        <img src={locker} alt='' />
                    </div>
                    <div className='enhanced-clean'>
                        <div>Pets allowed</div>
                        <div className='text-detail'>Guests often search for this popular amenity</div>
                    </div>
                </div>
            </div>
            <h4 className='hotel-offers'>What this place will offers</h4>
            <div className='facility-box'>
                <div className='facility'>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={wifilogo} alt='img' /></div>
                        <div className='text-detail-2'>Wifi</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={petlogo} alt='img' /></div>
                        <div className='text-detail-2'>Pets allowed</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={breakfastlogo} alt='img' /></div>
                        <div className='text-detail-2'>Breakfast</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={workspacelogo} alt='img' /></div>
                        <div className='text-detail-2'>Dedicated workspace</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={carbonlogo} alt='img' /></div>
                        <div className='text-detail-2'>Carbon monoxide alarm</div>
                    </div>
                </div>
                <div className='facility'>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={parkinglogo} alt='img' /></div>
                        <div className='text-detail-2' >Free parking premises</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={dryerlogo} alt='img' /></div>
                        <div className='text-detail-2'>Hair Dryer</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={smokingallowlogo} alt='img' /></div>
                        <div className='text-detail-2'>Smoking allowed</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={longtermallowlogo} alt='img' /></div>
                        <div className='text-detail-2'>Long term stays allowed</div>
                    </div>
                    <div className='wifi-style'>
                        <div className="logoimage"><img src={smokealarmlogo} alt='img' /></div>
                        <div className='text-detail-2'>Smoke alarm</div>
                    </div>
                </div>
            </div>
            <div className='extra-details'>
                Show all 19 amenities
            </div>
            <h4 className='detail-1'>Where you'll be</h4>
            <p className='detail-k'>Kasaul, Maharastra, India</p>

            <div>
                <div>
                    <img src={map_img} alt="img"/>
                </div>
                <div className='host-detail'>
                    <h4 className='host-detail-1'>Hosted by Vishal</h4>
                    <p className='host-detail-2'>Joined on the June 2021</p>
                </div>
                <div className='logo-host'>
                    <div><img src={Host_img} alt="img"></img></div>
                    <div>Identity verified</div>
                </div>
                <p className='state-line'>Response rate 100%</p>
                <p className='state-line'>Response time: within an hour</p>
                <button className='contact-host'>Contact host</button>
                <div className='secure'>
                    <div className='sec-img'><img src={sec_img} alt='img'></img></div>
                    <div>To protect your payment, never transfer
                        money or communicate outside of the Airbnb
                        website or app.</div>
                </div>
                <h4 className='state-line'>Things to know</h4>
                <div className='footer-1'>
                    <div>
                        <h4 className='move-right'>House Rule</h4>
                        <div className='wifi-style'>
                            <div className="logoimage"><img src={timerlogo} alt='img' /></div>
                            <div>Check-in: 11:00 am - 11:00 pm</div>
                        </div>
                        <div className='wifi-style'>
                            <div className="logoimage"><img src={petlogo} alt='img' /></div>
                            <div>Pets allowed</div>
                        </div>
                        <div className='wifi-style'>
                            <div className="logoimage"><img src={smokingallowlogo} alt='img' /></div>
                            <div>Smoking allowed</div>
                        </div>
                    </div>
                    <div>
                        <h4 className='move-right'>Health & Safety</h4>
                        <div className='wifi-style'>
                            <div className="logoimage"><img src={star} alt='img' /></div>
                            <div>Committed to Airbnb’s enhanced
                                cleaning process.</div>
                        </div>
                        <div className='wifi-style'>
                            <div className="logoimage"><img src={handwashlogo} alt='img' /></div>
                            <div>Airbnb’s social distancing and other
                                Covid-19-related guidlines apply</div>
                        </div>
                        <div className='wifi-style'>
                            <div className="logoimage"><img src={ques_mark_logo} alt='img' /></div>
                            <div>Carbon monoxide alarm not reported</div>
                        </div>
                        <div className='wifi-style'>
                            <div className="logoimage"><img src={ques_mark_logo} alt='img' /></div>
                            <div>Smoke alarm not reported</div>
                        </div>
                    </div>
                    <div>
                        <h4 className='move-right'>Cancellation policy</h4>
                        <div className='wifi-style'>
                            <div>Free cancellation before 1 Dec</div>
                        </div>
                    </div>
                </div>
                <div className='footer-2'>
                    <div className='footer-first'>
                        <h5>Support </h5>
                        <p>Help Centre</p>
                        <p>Safety information</p>
                        <p>Cancellation options</p>
                        <p>Our COVID-19 Response</p>
                        <p>Supporting people with disabilities</p>
                        <p>Report a neighbourhood concern</p>
                    </div>
                    <div>
                        <h5>Community</h5>
                        <p>Airbnb:disaster releif housing</p>
                        <p>Support Afghan refugees</p>
                        <p>Celebrating diversity & blonging</p>
                        <p>Combating discrimination</p>
                    </div>
                    <div>
                        <h5>Hosting </h5>
                        <p>Try hosting</p>
                        <p>Air Cover:protection for hosts</p>
                        <p>Explore hosting resources</p>
                        <p>Visit our community forum</p>
                        <p>How to host responsibly</p>
                    </div>
                    <div>
                        <h5>About </h5>
                        <p>Newsroom</p>
                        <p>Learn about new features</p>
                        <p>Letter from our founders</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Airbnb Luxe</p>
                    </div>
                    
                </div>
            </div>


            
        </div>

    )
}

export default AboutHost
