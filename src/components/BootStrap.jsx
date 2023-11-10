

export default function Bootstrap() {
  return (
    <>
      {/* Remove the .navbar-expand-* class to create a navigation bar that will always be vertical: */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" >
            <img src="./avatar1.png" alt="an avatar logo" style={{ width: "40px" }} className="rounded-pill"></img>
            <span className="navbar-text"> Navbar Text</span>
          </a>

          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
            </ul>
          </div>
        </div>
      </nav>



    </>
  )
} 