export default function Bootstrap() {
  return (
    <>
      <div className="container-md">

        <h3>This is a table</h3>
        <p>This table was created using Bootstrap</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Products Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>Aloe Vera Gel</td>
              <td>35 USD</td>
              <td>1 Unit</td>
            </tr>

            <tr className="table-info">
              <td>Aloe Berry Nectar</td>
              <td>35 USD</td>
              <td>1 Unit</td>
            </tr>

            <tr className="table-success">
              <td>Bee Propolis</td>
              <td>40 USD</td>
              <td>1 Bottle</td>
            </tr>

            <tr className="table-warning">
              <td>Royal Jelly</td>
              <td>40 USD</td>
              <td>1 Bottle</td>
            </tr>

            <tr className="table-danger">
              <td>MPD 2x Ultra</td>
              <td>30 USD</td>
              <td>1 Bottle</td>
            </tr>
            <tr className="table-secondary">
              <td>Bright Tooth Gel</td>
              <td>10 USD</td>
              <td>1 Tube</td>
            </tr>
            <tr className="table-active">
              <td>Forever Calcium</td>
              <td>25 USD</td>
              <td>1 Bottle</td>
            </tr>
            <tr className="table-light">
              <td>Nature Min</td>
              <td>25 USD</td>
              <td>1 Bottle</td>
            </tr>
            <tr className="table-dark">
              <td>Absorbent C</td>
              <td>25 USD</td>
              <td>1 Bottle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}