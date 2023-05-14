export default function Legend({info}){

    const{lat, lng, name, pict} = info;

    return(
        <div className="legend">
                <div class="card">
                    <div class="card-body">
                        <h5>Legend</h5>
                        You: {lat} {lng} <img src={pict}alt="" /> {name}
                    </div>
                </div>
            </div>
    )
}