import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as hotelData from '../../db.json'
import { useState } from 'react'

function Map() {
    const [selectedHotel, setSelecteHotel] = useState(null)
    return (
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: 17.385044, lng: 78.486671 }}
        >
            {hotelData.hotels.map((hotel) => (
                <Marker key={hotel.location_id} position={{ lat: Number(hotel.latitude), lng: Number(hotel.longitude) }}
                    onClick={() => {
                        setSelecteHotel(hotel)
                    }}
                   
                />
            ))}
            {selectedHotel && (
                <InfoWindow
                    position={{ lat: Number(selectedHotel.latitude), lng: Number(selectedHotel.longitude) }}
                    onCloseClick={() => {
                        setSelecteHotel(null)
                    }}
                >
                    <div style={{width:'200px'}}>
                        <h2>{selectedHotel.name}</h2>
                        <img style={{ width: "150px", height: '150px' }} src={selectedHotel.image} alt="" />
                        <p>{selectedHotel.location}</p>
                        <p>{ selectedHotel.rate}</p>
                        <p>{selectedHotel.rooms}</p>
                        <p>{selectedHotel.facility}</p>
                    </div>

                </InfoWindow>
            )}
        </GoogleMap>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))

export const Maps = () => {
    return (
        <div>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCtKbPSHf3NJKMY1cidEfgJthrS8ELoWog`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}