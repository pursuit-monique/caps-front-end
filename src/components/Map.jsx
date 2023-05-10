import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { useEffect, useState, useRef } from "react";
import Geolocation from 'geolocation';

import "./App.css";


export default function Map() {
    const mapRef = useRef(null);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });


      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10,
      };
      
      function success(pos) {
        const {latitude, longitude} = pos.coords;
        console.log(longitude)
        setMapCenter({lat: latitude, lng: longitude})
            
        console.log(latitude, longitude);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
    //   const handleMapLoad = (map) => {
    //     const center = map.getCenter();
    //     setMarkerPosition({
    //       lat: center.lat(),
    //       lng: center.lng(),
    //     });
    //   };

      
      navigator.geolocation.getCurrentPosition(success, error, options);
    //   useEffect(() => {setMapCenter({ lat: 0, lng: 0 })}, [])
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //   });

      return (
        <div className="App">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
            ref={mapRef}
            mapContainerClassName="map-container"
            // onCenterChanged={handleMapLoad}
            center={mapCenter}
            zoom={11}
            options={{mapId: 'c3bdb902aa4cda31', disableDefaultUI: true}}
          >
            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
            <Marker position={{ lat: mapCenter.lat, lng: mapCenter.lng}} onPositionChanged/>
          </GoogleMap>
          )}
        </div>
      );
    
}