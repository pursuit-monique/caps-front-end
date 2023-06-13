import { useParams } from "react-router-dom";

export default function LiveStream() {
  const { roomCode } = useParams();
  const subDomain = process.env.REACT_APP_100MS_SUB_DOMAIN;
  const link = `https://${subDomain}/meeting/${roomCode}`;

  return (
    <iframe
      title="100ms-app"
      allow="camera *;microphone *;display-capture *"
      src={link}
      className="iframe"
      //   style={{ height: "900px", width: "900px" }}
    ></iframe>
  );
}
