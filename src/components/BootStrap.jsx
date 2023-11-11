

export default function Bootstrap() {
  return (
    <>
      {/* Remove the .navbar-expand-* class to create a navigation bar that will always be vertical: */}

      <div className="container-fluid pt-3">
        <h3>Sticky Navbar</h3>
        <p>A sticky navigation bar stays fixed at the top of the page when you scroll past it.</p>
        <p>Scroll this page to see the effect. <strong>Note:</strong> sticky-top does not work in IE11 and earlier.</p>
      </div>


      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="rounded-pill" src="./avatar1.png" alt="Avatar Logo" style={{ width: "40px" }} /> Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto"  >
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
            </ul>

            <form action="get" className="d-flex">
              <input type="text" className="form-control me-3" placeholder="Search" />
              <button className="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
        <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
        <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
        <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
      </div>


    </>
  )
} 