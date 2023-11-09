

export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3  d-flex justify-content-center">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Dropdown Button
          </button>
          <ul className="dropdown-menu" >
            <li><h5 className="dropdown-header">Header 1</h5></li>
            <li> <a className="dropdown-item" href="#">Link 1</a></li>
            <li> <a className="dropdown-item" href="#">Link 2</a></li>
            <li> <a className="dropdown-item" href="#">Link 3</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <h5 className="dropdown-header">Header 2</h5>
            </li>
            <li><a href="#" className="dropdown-item">Another Link</a></li>
          </ul>
        </div>
      </div>
      <div className="container pt-3">
        <div className="dropdown dropend">
          <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Dropdown Button
          </button>
          <ul className="dropdown-menu" >
            <li><h5 className="dropdown-header">Header 1</h5></li>
            <li> <a className="dropdown-item" href="#">Link 1</a></li>
            <li> <a className="dropdown-item" href="#">Link 2</a></li>
            <li> <a className="dropdown-item" href="#">Link 3</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <h5 className="dropdown-header">Header 2</h5>
            </li>
            <li><a href="#" className="dropdown-item">Another Link</a></li>
          </ul>
        </div>
      </div>

      <div className="container-md pt-3 d-flex justify-content-end">
        <div className="dropdown dropstart">
          <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
            2nd Dropdown Menu
          </button>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">Default Link</a></li>
            <li><a href="#" className="dropdown-item active">Active Link</a></li>
            <li><a href="#" className="dropdown-item disabled">Disabled Link</a></li>
          </ul>
        </div>
      </div>

      <div className="container-md pt-3">
        <div className="dropdown dropdown-menu-end">
          <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
            This wide drop down menu is an example.
          </button>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">Default Link</a></li>
            <li><a href="#" className="dropdown-item active">Active Link</a></li>
            <li><a href="#" className="dropdown-item disabled">Disabled Link</a></li>
          </ul>
        </div>
      </div>

      <div className="container-md pt-3 ">
        <div className="dropdown ">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Drop down with text
          </button>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">Link 1</a></li>
            <li><a href="#" className="dropdown-item">Link 2</a></li>
            <li><a href="#" className="dropdown-item">Link 3</a></li>
            <li><a href="#" className="dropdown-item-text">Text link</a></li>
            <li><span className="dropdown-item-text">Just text</span></li>
          </ul>
        </div>
      </div>

      <div className="container-md pt-3 fixed-bottom">
        <div className="dropup dropdown-menu-end">
          <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
            The drop-up button.
          </button>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">Default Link</a></li>
            <li><a href="#" className="dropdown-item active">Active Link</a></li>
            <li><a href="#" className="dropdown-item disabled">Disabled Link</a></li>
          </ul>
        </div>
      </div>

      <div className="container-md pt-3">
        <div className="btn-group">
          <button className="btn btn-primary">Apple</button>
          <button className="btn btn-primary">Samsung</button>
          <div className="btn-group">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Sony</button>
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">PS5</a></li>
              <li><a href="#" className="dropdown-item">Bravia TV</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}