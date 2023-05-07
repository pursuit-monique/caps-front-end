import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';

export default function EventCard() {

    return (
    <>
         <container className="container">
        {/* <div className="card mb-3 cardSize">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://media.istockphoto.com/id/1370212283/photo/crowd-of-people-partying-at-live-concert.jpg?b=1&s=170667a&w=0&k=20&c=gz4D2fxjySx_yrPAbdWWS4jrAEENHmfuIeyBe3-kJ5o=" className="rounded-start imageContain" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</div> */}

 <div className="cardSize">
  <div className="row">
  <div className="col-1 imgContainer">
    <img src="https://media.istockphoto.com/id/1370212283/photo/crowd-of-people-partying-at-live-concert.jpg?b=1&s=170667a&w=0&k=20&c=gz4D2fxjySx_yrPAbdWWS4jrAEENHmfuIeyBe3-kJ5o=" className="imageContain" alt="..." />
  </div>
  <div className="col constraint">
      <div className="row-1"><h1 className="title">Title</h1></div>
      <div className="row-2 cardInfo">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nunc faucibus, dignissim urna ac, aliquam est. 
      </div>
      <div className="row align-items-center">
        <i className="userIcon margin"><span className="indicator"></span></i>
        <div className="col">
            <div className="row infoText">July Gold</div>
            <div className="row orgText infoText">Pursuit</div>
        </div>
        <div className='col-4'></div>
        <div className="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mainColor" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg><span className="orgText infoText">0.6km away</span></div>
        </div>
  </div>
</div>
</div>
        </container> 
        {/* <div class="container text-center">
      <div class="row">
        <div class="col"> <img src="https://media.istockphoto.com/id/1370212283/photo/crowd-of-people-partying-at-live-concert.jpg?b=1&s=170667a&w=0&k=20&c=gz4D2fxjySx_yrPAbdWWS4jrAEENHmfuIeyBe3-kJ5o=" className="imageContain" alt="..." /></div>

      <div class="col">
        <div class="row"><p className="title">Title</p></div>
        <div class="row cardInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nunc faucibus, dignissim urna ac, aliquam est. Pellentesque eu leo in libero consequat volutpat ac in felis. Quisque sed orci nisi. Sed ex dui, mattis ullamcorper bibendum quis, molestie vel nisijkjhgjhjhjhjhjkhjkhkj</div>
        <div class="row"><i className="userIcon"></i></div>
      </div>
    </div>
  </div> */}
    </>
    )
}