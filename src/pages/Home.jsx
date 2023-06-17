import Events from "../components/Events";
// import { logout } from "../firebase/auth";

function Home() {
  return (
    <div className="Home">
      <Events />
      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
}

export default Home;
