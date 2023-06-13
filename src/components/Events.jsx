
import { useState, useEffect, useRef } from "react";

import axios from "axios";
import EventCard from './EventCard';
import Menu from "./Menu";
import Map from "./Map"
import Legend from "./Legend"
import Categories from "./Categories"
import CategoriesCounter from "./CategoriesCounter";

import '../custom.css';

const API = process.env.REACT_APP_EVENTS_URL;

export default function Events() {
    const [isLoaded, setIsLoaded] = useState(false);

    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

    //State for Category buttons
    const [category, setCategory] = useState('');


    //State for Map and Card Data-- pulled from API data
    const [currEvents, setCurrEvents] = useState([]);

    //Current selected event ID
    const [markerId, setMarkerId] = useState();

    const userAgent = useRef("desktop");

    useEffect(() => {
      const interval = setInterval(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          console.log(userAgent.current);
          userAgent.current = "mobile";
        } else {
          console.log("desktop");
          userAgent.current = "desktop";
          console.log(userAgent.current);
        }
      }, 500);
    
      return () => clearInterval(interval);
    }, []);
    
  

   const mapType = userAgent.current === "mobile" ? "order-1 justify-content-center" : "order-2 justify-content-center";
   const eventCardType = userAgent.current === "mobile" ? "flex-column heightmenu overflow-auto order-2" : "flex-column heightmenu overflow-auto order-1";

    
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
      


    // console.log(currEvents);


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
          .then((response) =>{ 
            setCurrEvents(response.data);
            setIsLoaded(true);
          })

          .catch((c) =>{ 
            console.warn("catch", c);
            setIsLoaded(false);
          });
      }, []);

      console.log(currEvents)


    return (
    <> 
    {/* random add to test env variables and force new deploy AGAIN */}
     {/* top navigation bar */}
        <Menu /> 

        {/* Category selection bar */}
        {isLoaded ? <Categories setCategory={setCategory} setMarkerId={setMarkerId} /> : '' }
        {isLoaded ? <CategoriesCounter currEvents={currEvents} category={category} /> : '' } 
        {/* <Reset setCategory={setCategory} category={category} /> */}

        <article className="d-flex flex-wrap body">

            <div className="flex-column justify-content-end "></div>

                {/* Event card display */}
                <div className={eventCardType}>
                    <EventCard currEvents={currEvents.filter( event => !!category.id ? event.cause_id === Number(category.id) : true)} mapCenter={mapCenter} markerId={markerId} userAgent={userAgent.current} />
                </div>

                {/* Legend:  Is display: hidden on mediaScreen width < 480px */}
                {isLoaded? <Legend category={category}  /> : ''}

                {/* Map display.   */}
                <div className={mapType}>
                    <Map currEvents={currEvents.filter( event => !!category.id ? event.cause_id === Number(category.id) : true)} category={category} mapCenter={mapCenter} setMarkerId={setMarkerId} userAgent={userAgent} />
                </div>

        </article>
    </>
    )
}
