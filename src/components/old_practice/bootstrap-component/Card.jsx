

export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3">
        <h2>Basic Card</h2>
        <div className="card">
          <div className="card-header text-bg-primary ">header</div>
          <div className="card-body text-bg-info">
            body
          </div>
          <div className="card-footer text-bg-success">footer</div>
        </div>


        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className="container d-flex flex-column justify-content-center align-items-center pt-3">

          <div className="row p-3">

            <div className="card col-md-6" >
              <img className="card-img-top" src="./avatar1.png" alt="an avatar image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">John Doe is a web developer</p>
                <a href="#" className="btn btn-primary card-link">See profile</a>
              </div>
            </div>

            <div className="card col-md-6" >
              <div className="card-body">
                <h4 className="card-title">Mary Jane</h4>
                <p className="card-text">Mary Jane is a web developer</p>
                <a href="#" className="btn btn-primary card-link">See profile</a>
              </div>
              <img className="card-img-bottom" src="./newyork.jpg" alt="an avatar image" />
            </div>
          </div>

          <div className="card" style={{ width: "320px" }}>
            <img className="card-img-top" src="./avatar1.png" alt="an avatar image" />
            <div className="card-img-overlay">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">John Doe is a web developer</p>
              <a href="#" className="btn btn-primary card-link">See profile</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}