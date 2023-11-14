// import { useEffect } from 'react';
// import * as bootstrap from 'bootstrap';

export default function Bootstrap() {

  return (
    <>

      <div className="container mt-3">
        <h2>Spacing and margin</h2>
        <div className="pt-4 bg-warning">I only have a top padding (1.5rem)</div>
        <div className="p-5 bg-success text-white">I have a padding on all sides (3rem)</div>
        <div className="m-5 pb-5 bg-info">I have a margin on all sides (3rem) and a bottom padding (3rem)</div>
      </div>

      <div className="container pt-3">
        <div className="shadow-none p-4 mb-4 bg-light">No shadow</div>
        <div className="shadow-sm p-4 mb-4 bg-white">Small shadow</div>
        <div className="shadow p-4 mb-4 bg-white">Default shadow</div>
        <div className="shadow-lg p-4 mb-4 bg-white">Large shadow</div>
      </div>
    </>
  )
} 