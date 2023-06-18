import { useParams, useNavigate } from "react-router-dom";
import "./LiveStream.css";

export default function LiveStream() {
  const navigate = useNavigate();
  const { roomCode } = useParams();
  const subDomain = process.env.REACT_APP_100MS_SUB_DOMAIN;
  const link = `https://${subDomain}/meeting/${roomCode}`;

  function goBack() {
    navigate(-2);
  }

  return (
    <div>
      <iframe
        title="100ms-app"
        allow="camera *;microphone *;display-capture *"
        src={link}
        className="iframe"
        //   style={{ height: "900px", width: "900px" }}
      ></iframe>
      <div className="d-flex justify-content-center pb-2">
        <button
          type="button"
          className="btn btn-sm btn-secondary goback"
          onClick={goBack}
          onTouchStart={goBack}
        >
          Back to Event
        </button>
      </div>
    </div>
  );
}
