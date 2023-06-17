import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css";

export default function Menu() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          My Events
        </a>
        <a href="#news">Previous Events</a>
        <a href="#contact">All Events</a>
      </div>
    </>
  );
}
