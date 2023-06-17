import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css";

export default function Menu({ setType, type }) {

  function handleURL(type, event) {
    if (type === event.target.id) {
      console.log(type === event.target.id);
      return "active";
    } else {
      console.log(type === event.target.id);
      return "";
    }
  }

  return (
    <>
      <div className="topnav">
        <a
          className={(event) => handleURL(type, event)}
          
          id="all"
          onClick={(event) => {
            console.log("all");
            setType("all");
          }}
        >
          All Events
        </a>
        <a
          className={(event) => handleURL(type, event)}
          
          id="Date"
          onClick={(event) => {
            console.log("Date");
            setType("Date");
          }}
        >
          Previous Events
        </a>
        <a
          className={(event) => handleURL(type, event)}
          
          id="Current"
          onClick={(event) => {
            console.log(type === event.target.id);
            setType("Current");
          }}
        >
          Current Events
        </a>
      </div>
    </>
  );
}
