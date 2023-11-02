export default function Bootstrap() {
  return (
    <>
      <div className="container-md">
        <h2>Example of Alert</h2>
        <p>Alerts are created with the .alert class, followed by a contextual color classes:</p>

        <div className="alert alert-primary">
          <strong>hello</strong> is better than goodbye.
        </div>

        <div className="alert alert-secondary">
          <strong>the second wheel</strong> is the weakest.
        </div>

        <div className="alert alert-info"><strong>info</strong> is used for the wise</div>
        <div className="alert alert-success"><strong>success</strong> is within our reach</div>
        <div className="alert alert-warning"><strong>I warn</strong> you to give up</div>
        <div className="alert alert-danger">This is a <strong>dangerous</strong> world</div>
        <div className="alert alert-dark"><strong>The dark</strong>side always win first</div>
        <div className="alert alert-light">But <strong>The light</strong>side will take the final victory</div>

      </div>
    </>
  )
}