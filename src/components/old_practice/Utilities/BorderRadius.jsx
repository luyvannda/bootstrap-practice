// import { useEffect } from 'react';
// import * as bootstrap from 'bootstrap';

export default function Bootstrap() {


  return (
    <>
      {/* Style
    span {
  display: inline-block;
  width: 70px;
  height: 70px;
  margin: 6px;
  background-color: #d0cece;
}
.row {
  img {
    max-width: 6rem;
  }
}

#rounded-pill {
  width: 150px;
  height: 75px;
}
    
    */}
      <div className="container-md pt-3">
        <h2>Border</h2>
        <span className="border border-primary"></span>
        <span className="border border-2 border-secondary"></span>
        <span className="border-top border-3 border-success"></span>
        <span className="border-end border-4 border-info"></span>
        <span className="border-bottom border-5 border-warning"></span>
        <span className="border-start border-1 border-danger"></span>
        <br />

        <span className="border border-top-5  border-dark"></span>
        <span className="border border-end-4 border-white"></span>

      </div>

      <div className="container-md pt-3">
        <h2>Border Radius</h2>

        <div className="row gap-3">
          <img src="./avatar1.png" className="border border-primary rounded-1" alt="An avatar icon"></img>
          <img src="./avatar1.png" className="border border-info rounded-start-2" alt="An avatar icon"></img>
          <img src="./avatar1.png" className="border border-success rounded-end-3" alt="An avatar icon"></img>
          <img src="./avatar1.png" className="border border-warning rounded-top-4 " alt="An avatar icon"></img>
          <img src="./avatar1.png" className="border border-danger  rounded-bottom-5" alt="An avatar icon"></img>
        </div>


        <div className="container-md pt-3">


          <img src="./avatar1.png" style={{ width: "6rem" }} className="rounded-circle me-3" alt="An avatar icon"></img>

          <img id="rounded-pill" src="./avatar1.png" className="rounded-pill " alt="An avatar icon"></img>

        </div>
      </div>

      <div className="container mt-3">
        <h2>Float</h2>
        <p>Float an element to the right with the .float-end class or to the left with .float-start, and clear floats with the .clearfix class.</p>
        <div className="clearfix">
          <span className="float-start">Float left</span>
          <span className="float-end">Float right</span>
        </div>
      </div>
    </>
  )
} 