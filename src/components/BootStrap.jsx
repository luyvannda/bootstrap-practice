

export default function Bootstrap() {
  return (
    <>

      <div id="carouselComponent" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselComponent" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselComponent" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselComponent" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./newyork.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./paris.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./sanfran.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselComponent" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselComponent" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid pt-3">
        <h3>Carousel Example</h3>
        <p>The following example shows how to create a basic carousel with indicators and controls.</p>
      </div>

    </>
  )
} 