import { useNavigate } from "react-router-dom";

export default function Live(live) {
  const navigate = useNavigate();

  function joinLive(viewerCode) {
    navigate("/live/" + viewerCode);
  }

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-4">
          <img
            src="https://picsum.photos/600/400"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text
            </p>

            <p className="card-text">
              <button
                className="btn btn-primary"
                onClick={() => joinLive(live.viewer_code)}
              >
                Join Live
              </button>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
