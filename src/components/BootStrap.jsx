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
      </div>
    </>
  )
} 