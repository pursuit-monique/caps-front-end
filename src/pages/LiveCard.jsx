import {useNavigate } from "react-router-dom";
export default function LiveCard({eventData, index}){

    const navigate = useNavigate();

    function joinLive(viewerCode) {
        navigate("/live/" + viewerCode);
      }
    return(
        <>
<div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="" src="https://picsum.photos/600/400" alt="Card image cap" / >
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{index + 1}</h4>
                        <p className="card-text"></p>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted"> <button
                              className="btn btn-primary"
                              onClick={() => joinLive(eventData.viewer_code)}
                            >
                              Join Live
                            </button></small>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}