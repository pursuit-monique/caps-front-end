import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';

export default function EventCard({currEvents, mapCenter}) {

  console.log(currEvents)
  function parseTitle(title){

    if (title.length > 45){
      return `${title.slice(0, 45).trim()}...`
    }
    return title;
   }

   
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const lat1Rad = degreesToRadians(lat1);
      const lon1Rad = degreesToRadians(lon1);
      const lat2Rad = degreesToRadians(lat2);
      const lon2Rad = degreesToRadians(lon2);

      const dlon = lon2Rad - lon1Rad;
      const dlat = lat2Rad - lat1Rad;
      const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const radius = 3956;
      const distance = radius * c;
  
      return distance.toFixed(2);
    };
  
    const degreesToRadians = (degrees) => {
      return degrees * (Math.PI / 180);
    };
  


    return (
    <>
      <container className="container d-flex flex-column overflow-auto">
{currEvents.map(event =>  (
  <div className="cardSize">
          <div className="rowimg">
            <div className="col-1 imgContainer">
        {/* <img src={event.img_link} className="imageContain" alt="..." /> */}
        <div
          className="imageContain"
          style={{
            backgroundImage: `linear-gradient(to right, transparent 85%, white), url(${event.img_link})`,
            // backgroundImage: `url(${event.img_link})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}></div>
        </div>
  <div className="col constraint">
      <div className="row-1"><h1 className="title">{parseTitle(event.title)} {}</h1></div>
      <div className="row-2 cardInfo">
{event.description}
      </div>
      <div className="row align-items-center">
      <span className="indicator"></span><img src={event.user_profile_link} alt="name" className="userIcon margin"></img>
        <div className="col">
            <div className="row infoText">{event.f_name} {event.l_name}</div>
            <div className="row orgText infoText">Pursuit</div>
        </div>
        <div className='col-1'></div>
        <div className="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mainColor" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg><span className="orgText infoText">{calculateDistance( Number(mapCenter.lat), Number(mapCenter.lng), Number(event.latitude), Number(event.longitude))}mi away</span></div>
        </div>
  </div>
</div>
</div>
))}

        </container> 
    </>
    )
}