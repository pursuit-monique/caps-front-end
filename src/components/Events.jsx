import EventCard from './EventCard';
import NavBar from './NavBar';
import Menu from "./Menu";

import '../custom.css';

export default function Events() {
    return (
    <>  
        <NavBar />
        <Menu />
        <container className="d-flex flex-wrap body">
            <div className="flex-column justify-content-end "></div>
            <div className="flex-column heightmenu overflow-auto order-2"><EventCard /></div>
            <div className="order-1 justify-content-center"> <img src="https://snazzy-maps-cdn.azureedge.net/assets/132-light-gray.png?v=20170626081135" className="map" alt="..." /></div>
            
        </container>
    </>
    )
}