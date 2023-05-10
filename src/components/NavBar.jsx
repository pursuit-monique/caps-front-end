export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bottomgutter">
  <div className="container-fluid">
    {/* <a className="navbar-brand">HAPP'N <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mainColor" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/> */}
 <span className="orgText infoText hidden">Stay in the know, wherever you go - with happ'n!</span>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
      
      <i className="userIcon margin"><span className="indicator"></span></i>
      

  </div>
</nav>
    )
}