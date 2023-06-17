import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css";

export default function Menu({ type }) {

  function handleURL(type, event) {
    if (type.current === event.target.id) {
      console.log(type.current === event.target.id);
      return "";
    } else {
      console.log(type.current === event.target.id);
      return "";
    }
  }

  return (
    <>
      <div className="topnav">
        <a
          className={(event) => handleURL(type, event)}
          href="#"
          id="all"
          onClick={(event) => {
            console.log("all");
            type.current = "all";
          }}
        >
          All Events
        </a>
        <a
          className={(event) => handleURL(type, event)}
          href="#"
          id="Date"
          onClick={(event) => {
            console.log("Date");
            type.current =  "Date";
          }}
        >
          Previous Events
        </a>
        <a
          className={(event) => handleURL(type, event)}
          href="#"
          id="Current"
          onClick={(event) => {
            console.log(type === event.target.id);
            type.current = "Current";
          }}
        >
          Current Events
        </a>
      </div>
    </>
  );
}
