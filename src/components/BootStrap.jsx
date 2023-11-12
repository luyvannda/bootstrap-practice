// import { useEffect } from 'react';
// import * as bootstrap from 'bootstrap';

export default function Bootstrap() {

  return (
    <div className="container-md pt-3">

      {/* Offcanvas Sidebar 

      Use the .offcanvas-start|end|top|bottom to position the offcanvas to the left, right, top or bottom
      */}

      <div className="offcanvas offcanvas-end offcanvas-lg text-bg-dark" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Heading</h1>
          <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <p>Some text lorem ipsum.</p>
          <p>Some text lorem ipsum.</p>
          <button className="btn btn-secondary" type="button">A Button</button>
        </div>
      </div>

      {/* Button to open the offcanvas sidebar */}
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
        Open Offcanvas Sidebar
      </button>
    </div>

  )
} 