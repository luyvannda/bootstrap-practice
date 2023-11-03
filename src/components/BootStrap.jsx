
export default function Bootstrap() {
  return (
    <>
      <div className="container-md pt-4">

        <button className="btn btn-outline-primary mx-2">Primary</button>
        <button className="btn btn-outline-secondary mx-2">Secondary</button>
        <button className="btn btn-outline-info mx-2" >Info</button>
        <button className="btn btn-outline-success mx-2 btn-lg">Success</button>
        <button className="btn btn-outline-warning mx-2 btn-sm">Warning</button>

        <div className="d-grid mt-2 gap-2">
          <button className="btn btn-danger btn-block">Danger</button>
          <button className="btn btn-dark btn-block">Dark</button>
          <button className="btn btn-light btn-block">Light</button>
        </div>

        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...
        </button>

        <button className="btn btn-info" type="button">
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...
        </button>

        <div className="btn-group">
          <button type="button" className="btn btn-primary">Sony</button>
          <button type="button" className="btn btn-primary">Samsung</button>
          <button type="button" className="btn btn-warning">Apple</button>
          <button type="button" className="btn btn-warning">Oppo</button>
        </div>

        <div className="btn-group-vertical">
          <button type="button" className="btn btn-primary">Apple</button>
          <button type="button" className="btn btn-primary">Samsung</button>
          <button type="button" className="btn btn-primary">Sony</button>
        </div>

      </div >
    </>
  )
}