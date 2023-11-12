import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';


export default function Bootstrap() {

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `${document.getElementById("toastbtn").onclick = function () {
      const toastElList = [].slice.call(document.querySelectorAll('.toast'))
      const toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
      })
      toastList.forEach(toast => toast.show())
    }}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
      <div className="container-md pt-3">
        <h3>Toast Example</h3>
        <p>In this example, we use a button to show the toast message.</p>

        <button type="button" className="btn btn-primary" id="toastbtn">Show Toast</button>

        <div className="toast">
          <div className="toast-header">
            Toast Header
            <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
          </div>
          <div className="toast-body">
            Some text inside the toast body
          </div>
        </div>
      </div>

    </>
  )
} 