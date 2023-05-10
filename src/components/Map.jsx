import { GoogleMap, Marker, useLoadScript, OverlayView } from "@react-google-maps/api";

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
      


      const [legendItems, setLegendItems] = useState([
        { label: 'Marker 1', color: 'red' },
        { label: 'Marker 2', color: 'blue' },
        { label: 'Marker 3', color: 'green' },
      ]);
    
      const overlayViewRef = React.createRef(null);
    
      const getPixelPositionOffset = (width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
      });

      
    


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
            
            <Marker position={{ lat: 40.668664, lng: 73.856743 }} />
            {mapCenter && (
          <Marker 
          position={mapCenter} 
          title="Your Location" 
          icon={{
            url: 'locationsm.svg', // URL of the marker icon
            
          }} />


        )}

{legendItems.map((item, index) => (
          <Marker
            key={index}
            position={{ lat: 0, lng: 0 }}
            icon={{
              url: `https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${item.color}`,
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        <OverlayView
          position={{ lat: 0, lng: 0 }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}
          ref={overlayViewRef}
        >
          <div className="legend">
            {legendItems.map((item, index) => (
              <div key={index} className="legend-item">
                <span className="legend-icon" style={{ backgroundColor: item.color }}></span>
                <span className="legend-label">{item.label}</span>
              </div>
            ))}
          </div>
        </OverlayView>


          </GoogleMap>
          )}
        </div>
      );
    
}