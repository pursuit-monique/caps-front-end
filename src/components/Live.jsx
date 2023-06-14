import { useNavigate } from "react-router-dom";

export default function Live(live) {
  const navigate = useNavigate();

  function joinLive(viewerCode) {
    navigate("/live/" + viewerCode);
  }

  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-4">
          <img
            src="https://picsum.photos/600/400"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text</p>

            <p class="card-text">
              <button
                class="btn btn-primary"
                onClick={() => joinLive(live.viewer_code)}
              >
                Join Live
              </button>
              {/* <small class="text-muted">Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
