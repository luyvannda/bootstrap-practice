// import { useEffect } from 'react';
// import * as bootstrap from 'bootstrap';

export default function Bootstrap() {

  return (
    <>

      <div className="container mt-3">
        <h2>Float</h2>
        <p>Float an element to the right with the .float-end class or to the left with .float-start, and clear floats with the .clearfix class.</p>
        <div className="clearfix">
          <span className="float-start">Float left</span>
          <span className="float-end">Float right</span>
        </div>

        <div className="clearfix">

          <div className="float-sm-end">Float right on small screens or wider</div><br />
          <div className="float-md-end">Float right on medium screens or wider</div><br />
          <div className="float-lg-end">Float right on large screens or wider</div><br />
          <div className="float-xl-end">Float right on extra large screens or wider</div><br />
          <div className="float-xxl-end">Float right on XXL screens or wider</div><br />
          <div className="float-none">Float none</div>
        </div>
      </div>

      <div className="container-md pt-3">

        <div className="mx-auto bg-warning" style={{ width: "4rem" }}>Centered</div>

        <div className="w-25 bg-warning">Width 25%</div>
        <div className="w-50 bg-warning">Width 50%</div>
        <div className="w-75 bg-warning">Width 75%</div>
        <div className="w-100 bg-warning">Width 100%</div>
        <div className="w-auto bg-warning">Auto Width</div>
        <div className="mw-100 bg-warning">Max Width 100%</div>
      </div>

      <div className="container mt-3">
        <h1>Height Utilities</h1>
        <p>Set the height of an element with the w-* classes:</p>
        <div style={{ height: "200px", backgroundColor: "#ddd" }}>
          <div className="h-25 d-inline-block p-2 bg-warning">Height 25%</div>
          <div className="h-50 d-inline-block p-2 bg-warning">Height 50%</div>
          <div className="h-75 d-inline-block p-2 bg-warning">Height 75%</div>
          <div className="h-100 d-inline-block p-2 bg-warning">Height 100%</div>
          <div className="h-auto d-inline-block p-2 bg-warning">Auto Height</div>
          <div className="mh-100 d-inline-block p-2 bg-warning" style={{ height: "500px" }}>Max Height 100%</div>
        </div>
      </div>

    </>
  )
} 