import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';


export default function Bootstrap() {

  useEffect(() => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    // eslint-disable-next-line no-unused-vars
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }, []);


  return (
    <>
      <div className="container-md pt-3">
        <h3>Popover Example</h3>

        <button type="button" className="btn btn-primary" data-bs-toggle="popover" title="Popover Header" data-bs-placement="bottom" data-bs-trigger="focus" data-bs-content="Hello, my name is Joe. Nice to meet you!!!">Trigger</button>

      </div>

      <div className="container-md pt-3 d-flex flex-column align-items-end">
        <h3>Hoverable Popover</h3>

        <a href="#" title="Header" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="left" data-bs-content="Popover text">Hover over me</a>
      </div>

    </>
  )
} 