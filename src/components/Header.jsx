import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        HAPP'N
        <img className="logo" src="location2.png" alt="location pin logo" />
      </div>

      <img
        className="avatar"
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        alt="Avatar"
      />
    </header>
  );
}
