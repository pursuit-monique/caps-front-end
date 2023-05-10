import { GoogleMap, Marker, useLoadScript, InfoBox } from "@react-google-maps/api";

import { useEffect, useState, useRef } from "react";

import "./App.css";


export default function Map() {
    const mapRef = useRef(null);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });

const options = { closeBoxURL: '', enableEventPropagation: true };


 
      
      function success(pos) {
        const {latitude, longitude} = pos.coords;
        console.log(longitude)
        setMapCenter({lat: latitude, lng: longitude})
            
        console.log(latitude, longitude);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      

    


    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10,
          };
        navigator.geolocation.getCurrentPosition(success, error, options);
    
        const interval = setInterval(() => {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);



      return (
        <div className="App">
          {!isLoaded ? (
            <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          ) : (
            <GoogleMap
            ref={mapRef}
            mapContainerClassName="map-container"
            center={mapCenter}
            zoom={12}
            options={{mapId: 'c3bdb902aa4cda31', disableDefaultUI: true, maxZoom: 15, minZoom: 12}}
            gestureHandling="none"
          >
            <InfoBox
      options={options}
      position={mapCenter}
    >
      <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12, top: '100%', left: '100%'}}>
        <div style={{ fontSize: 16, fontColor: `#08233B` }}>
          Hello, World!
        </div>
      </div>
    </InfoBox>
            <Marker position={{ lat: 40.668664, lng: 73.856743 }} />
            {mapCenter && (
          <Marker 
          position={mapCenter} 
          title="Your Location" 
          icon={{
            url: 'locationsm.svg', // URL of the marker icon
            
          }} />
        )}
          </GoogleMap>
          )}
        </div>
      );
    
}