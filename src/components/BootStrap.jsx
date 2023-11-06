
export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3">
        .<div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border spinner-border-sm text-muted"></div>
          <div className="spinner-border spinner-border-sm text-primary"></div>
          <div className="spinner-border spinner-border-sm text-success"></div>
          <div className="spinner-border spinner-border-sm text-info"></div>
          <div className="spinner-grow spinner-grow-sm text-warning"></div>
          <div className="spinner-grow spinner-grow-sm text-danger"></div>
          <div className="spinner-grow spinner-grow-sm text-secondary"></div>
          <div className="spinner-grow spinner-grow-sm text-dark"></div>
          <div className="spinner-grow spinner-grow-sm text-light"></div>
        </div>
      </div>

      <div className="container-md pt-4">

        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-primary">
            <span className="spinner-border spinner-border-sm"></span>
          </button>

          <button type="button" className="btn btn-info">
            <span className="spinner-border spinner-border-sm"></span> Loading...
          </button>


          <button type="button" className="btn btn-success" disabled>
            <span className="spinner-grow spinner-grow-sm"></span> Loading...
          </button>


          <button type="button" className="btn btn-warning" disabled>
            <span className="spinner-grow spinner-grow-sm"></span> Loading...
          </button>
        </div>
      </div>
    </>
  )
}