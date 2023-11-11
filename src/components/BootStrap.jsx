import { Tooltip } from "bootstrap";
import { useEffect } from "react";

export default function Bootstrap() {
  useEffect(() => {
    const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
    tooltipTriggerList.forEach((el) => new Tooltip(el));
  }, []);

  return (
    <>
      <div className="container-md pt-3">

        <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hello World!!!">
          Hover on Me!!!
        </button>
      </div>

      <div className="container-md pt-3">
        <button type="button" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Hello World!!!">
          Hover on Me!!!
        </button>
      </div>

      <div className="container-md pt-3">

        <button type="button" className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Hello World!!!">
          Hover on Me!!!
        </button>
      </div>

      <div className="container-md pt-3">

        <button type="button" className="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="left" title="Hello World!!!">
          Hover on Me!!!
        </button>

      </div>

    </>
  )
} 