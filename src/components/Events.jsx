
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

    //State for Category buttons
    const [category, setCategory] = useState("");
    //State for Map and Card Data
    const [currEvents, setCurrEvents] = useState([]);



    useEffect(() => {
        axios
          .get(`${API}`)
          .then((response) => setCurrEvents(response.data))
          .catch((c) => console.warn("catch", c));
      }, []);

      console.log(currEvents)


    return (
    <> 
     {/* top navigation bar */}
        <Menu /> 

        {/* Category selection bar */}
        <Categories setCategory={setCategory} />

        <article className="d-flex flex-wrap body">
            <div className="flex-column justify-content-end "></div>

            {/* Event card display */}
            <div className="flex-column heightmenu overflow-auto order-2">
                <EventCard currEvents={currEvents} />
            </div>

            {/* Legend:  Is display: hidden on mediaScreen width < 480px */}
            <Legend category={category}  />

            {/* Map display.   */}
            <div className="order-1 justify-content-center">  
                <Map currEvents={currEvents} category={category}  /> 


            </div>
        </article>
    </>
    )
}
