
export default function Bootstrap() {
  return (
    <>
      <h1>Example heading <span className="badge bg-primary">New</span></h1>
      <h2>Example heading <span className="badge bg-secondary">New</span></h2>
      <h3>Example heading <span className="badge bg-info">New</span></h3>
      <h4>Example heading <span className="badge rounded-pill bg-success">New</span></h4>
      <h5>Example heading <span className="badge rounded-pill bg-warning">New</span></h5>
      <h6>Example heading <span className="badge rounded-pill bg-danger">New</span></h6>
      <h6>Example heading <span className="badge rounded-pill bg-dark">New</span></h6>

      <button type="button" className="btn btn-primary">Message <span className="badge bg-danger">5</span></button>

      <button type="button" className="btn btn-danger">Notification <span className="badge bg-dark">7</span></button>
    </>
  )
}