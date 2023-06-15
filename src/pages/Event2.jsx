import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ShareThis from "../components/helpers/ShareThis"
import axios from "axios"; 
import { AuthContext } from "../context/AuthContext";

import {cause, iconList, tempData} from "../components/helpers/objects"
import {checkin, dateHandler} from "../components/helpers/functions"
import './Event.css';
import '../custom.css';
import cityscape from "../assets/cityscape.jpeg"

function Event2() {
  // const API = process.env.REACT_APP_BACKEND_URL;
  // const API = "https://happn.onrender.com";
  const API = process.env.REACT_APP_BACKEND_URL;
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState("");
  const [livestreams, setLivestreams] = useState([]);
  console.log("backend", API);
  // get event details
  useEffect(() => {
    axios
      .get(`${API}/events/${id}`)
      .then((res) => {
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((err) => { setEvent(tempData[id -1])
        console.log(event)});

    // get live streams by event id
    axios
      .get(`${API}/live/${id}`)
      .then((res) => {
        console.log(res.data);
        setLivestreams(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, API]);

  async function handleCheckIn() {
    try {
      const res = await axios.get(
        `${API}/events/${event.id}/checkin/${currentUser.uid}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLive() {
    // const roomCodes = await axios.post(`${API}/live/create-room`);
    const res = await axios.post(`${API}/live/create-room`, {
      event_id: event.id,
      streamer_user_id: currentUser.uid,
    });
    // add user info to backend here
    // const broadcasterCode = await res.data.roomCodes.data[0].code;
    console.log("response", res);
    const broadcasterCode = await res.data.broadcaster_code;
    // console.log(broadcasterCode);
    navigate(`/live/${broadcasterCode}`);
  }

  function joinLive(viewerCode) {
    navigate("/live/" + viewerCode);
  }
const eventFormat = event ? event.address.split(',') : '';
const formattedEventAddress =  eventFormat ? `${eventFormat[0]}, ${eventFormat[1]}, ${eventFormat[2]}, ${event.zip}` : ''
  return (
    <container 
    style={{
      width: '100vw',
      height: '100vh',
      backgroundImage:`url(${cityscape})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
}}>
    <div 
    className="container nomargin"
    // style={{backgroundImage:`url(${cityscape})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed'}}
    >
      {/* <Header /> */}
      <div className="row gx-4 gx-lg-5 my-5">
        <div className="col-md-7 align-middle">
          {/* <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
            alt="..."
          /> */}
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            // src="https://picsum.photos/400/300"
            src={event.img_link}
            style={{backgroundColor: "white", borderRadius: '10px', border: '1px solid rgb(204, 210, 219)', boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)'}}
            alt="event cover"
          />
        </div>
        <div className="col-md-5">
          {/* <h1 className="font-weight-light">Business Name or Tagline</h1>
          <p>
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p>
          <a className="btn btn-primary" href="#!">
            Call to Action!
          </a> */}
          <div className="event-details-container"   style={{backgroundColor: "white", borderRadius: '10px', border: '1px solid rgb(204, 210, 219)', boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)'}}>
            <div className="event-title-wrapper" style={{backgroundColor: `${event.cause_id === 'undefined' ? cause[event.cause_id][1] : '#03bdd6'}}`, borderRadius: '10px 10px 0px 0px'}}>
            {/* <div className="event-title-wrapper" style={{backgroundColor: cause[event.cause_id][1]}}> */}
              <h3 className="event-title" style={{ marginLeft: '20px', marginTop: '2px'}}>{event.title}</h3>
            </div>
            <p style={{textAlign: 'right', color: '#545454', fontSize: "small", marginTop: '8px', marginRight: '8px'}}><em>{formattedEventAddress}</em></p>
            <div className="event-creator-container" style={{paddingTop: '8px', marginTop: '8px'}}>
              <img
                className="avatar organizer"
                src={event.user_profile_link}
                alt="Avatar"
              />
              <p>
                {event.f_name} {event.l_name}
              </p>

              <div className="event-categories">
                <ul>
                  <li style={{backgroundColor: `${event.cause_id === 'undefined' ? cause[event.cause_id][1] : '#03bdd6'}`}}>{ event ? cause[event.cause_id][0] : 'blah'}</li>
                  <li>{event.category}</li>
                </ul>
              </div>
            </div>

            <p className="event-description" style={{borderLeft: `2px solid ${event.cause_id === 'undefined' ? cause[event.cause_id][1] : '#03bdd6'} `, marginLeft: '16px'}}>{event.description}</p>
            <p className="event-date">
              {/* Date: {dateHandler(event.date, event.time).eventdate}  
              {dateHandler(event.date, event.time).eventtime} */}
            </p>
            {/* <p className="event-time">Time: {event.time}</p> */}
            <p style={{ marginLeft: '20px', fontSize: "12px"}}>Users Checked In: {event.checked_in_users}</p>
            <ShareThis description={event.description} title={event.title} image={event.img_link} /> 
            <div className="live-btn-container">
              <div>
                <div className="live-btn-wrapper">
                  <button
                    className="go-live-btn"
                    title="Go Live"
                    onClick={handleLive}
                  >
                    <i className="bx bx-camera-movie"></i>
                  </button>
                </div>
                <p className="go-live-text">Go Live</p>
              </div>
              <div>
                <div className="checkin-btn-wrapper">
                  <button
                    className="checkin-btn"
                    title="Check In"
                    onClick={handleCheckIn}
                  >
                    <i className="bx bx-check-circle"></i>
                  </button>
                </div>

                <p className="checkin-text">Check In</p>
              </div>
            </div>
          </div>
        </div>
        <h4 style={{marginTop: '30px', marginBottom: '30px'}}><span class="bordered-text">Live Streams : {livestreams.length} </span></h4>
        <container className="container d-flex flex-column overflow-auto">
        {livestreams.map((live, index) => {

          return (
            <div className="cardSize"
            // style={{marginLeft: '25%'}}
            >
              <div className="rowimg">
                <div className="col-1 imgContainer">
            <div
              className="imageContain"
              style={{
                backgroundImage: `linear-gradient(to right, transparent 85%, white), url("https://picsum.photos/600/400")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}></div>
            </div>
      <div className="col constraint">
          <div className="row-1"><h1 className="title" style={{marginTop: '8px'}}>Stream #{index}</h1></div>
          <div className="dateInfo" ></div>
          <div className="row-2 cardInfo">
         <button
            className="btn btn-primary"
            style={{marginLeft: '30%'}}
            onClick={() => joinLive(live.viewer_code)}
            >
            Join Live
            </button>
          </div>
          <div className="row align-items-center">
          <span className="indicator"></span><img src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt="name" className="userIcon margin"></img>
            <div className="col">
                <div className="row infoText">Username</div>
                <div className="row orgText infoText"></div>
            </div>
            <div className='col-1'></div>
            <div className="col"></div>
            </div>
      </div>
    </div>
    </div>
            // <div class="card mb-3" style={{ maxWidth: "540px" }}>
            //   <div class="row g-3">
            //     <div class="col-4 d-flex align-content-center">
            //       <img
            //         src="https://picsum.photos/600/400"
            //         class="img-fluid rounded-start"
            //         alt="..."
            //       />
            //     </div>
            //     <div class="col-8">
            //       <div class="card-body">
            //         <h5 class="card-title">User Name</h5>
            //         {/* <p class="card-text">
            //           This is a wider card with supporting text
            //         </p> */}

            //         <p class="card-text">
            //           <button
            //             class="btn btn-primary"
            //             onClick={() => joinLive(live.viewer_code)}
            //           >
            //             Join Live
            //           </button>
            //         </p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
        </container>
      </div>
    </div>
    </container>
  );

}

export default Event2;
