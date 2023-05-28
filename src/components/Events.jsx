
import { useState, useEffect } from "react";

import axios from "axios";
import EventCard from './EventCard';
import Menu from "./Menu";
import Map from "./Map"
import Legend from "./Legend"
import Categories from "./Categories"
import '../custom.css';

const API = process.env.REACT_APP_EVENTS_URL;
export default function Events() {
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

    //State for Category buttons
    const [category, setCategory] = useState("");


    //State for Map and Card Data
    const [currEvents, setCurrEvents] = useState([]);


    function success(pos) {
        const {latitude, longitude} = pos.coords;
        // console.log(longitude)
        setMapCenter({lat: latitude, lng: longitude})
        // setInfo({lat: latitude, lng: longitude, name: "Jane Doe", pict: "../locationsm.svg"})
            
        console.log(latitude, longitude);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      


    console.log(currEvents);


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





    useEffect(() => {
        axios
          .get(`${API}/events/`)
          .then((response) => setCurrEvents(response.data))
          .catch((c) => console.warn("catch", c));
      }, []);

      console.log(currEvents)


    return (
    <> 
    {/* random add to test env variables and force new deploy AGAIN */}
     {/* top navigation bar */}
        <Menu /> 

        {/* Category selection bar */}
        <Categories setCategory={setCategory} />

        <article className="d-flex flex-wrap body">

            <div className="flex-column justify-content-end "></div>

            {/* Event card display */}
            <div className="flex-column heightmenu overflow-auto order-2">
                <EventCard currEvents={currEvents} mapCenter={mapCenter} />
            </div>

            {/* Legend:  Is display: hidden on mediaScreen width < 480px */}
            <Legend category={category}  />

            {/* Map display.   */}
            <div className="order-1 justify-content-center">  
                <Map currEvents={currEvents} category={category} mapCenter={mapCenter} />
            </div>

        </article>
    </>
    )
}
