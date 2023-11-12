
export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3">
        <h1>Hello</h1>
        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar" style={{ minWidth: "10%" }} >10%</div>
        </div>

        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar progress-bar-striped bg-success" style={{ minWidth: "20%" }} >20%</div>
        </div>

        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ minWidth: "30%" }} >30%</div>
        </div>

        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ minWidth: "40%" }} >40%</div>
        </div>

        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar bg-danger" style={{ minWidth: "50%" }} >50%</div>
        </div>

        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar bg-secondary" style={{ minWidth: "60%" }} >60%</div>
        </div>

        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar bg-dark" style={{ minWidth: "70%" }} >70%</div>
        </div>

        <div className="progress mb-2" style={{ minHeight: "1.5rem" }}>
          <div className="progress-bar bg-light text-black" style={{ minWidth: "80%" }} >80%</div>
        </div>
      </div>

      <div className="container-md pt-3">
        <h2>Multiple progress bars</h2>
        <p>Create a stacked progress bar by placing multiple bars into the same div with class=&quot;progress&quot;:</p>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{ minWidth: "40%" }} >Free Space</div>
          <div className="progress-bar bg-warning" role="progressbar" style={{ minWidth: "10%" }} >Warning</div>
          <div className="progress-bar bg-danger" role="progressbar" style={{ minWidth: "20%" }} >Danger</div>
        </div>
      </div>
    </>
  )
}