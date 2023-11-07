
export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3">

        <ol className="list-group list-group-numbered">
          <li className="list-group-item active">First item</li>
          <li className="list-group-item">Second item</li>
          <li className="list-group-item">Third item</li>
        </ol>

        <div className="container-md pt-3">
          <h2 className="pt-4">List group with linked</h2>
          <div className="list-group list">
            <a href="#" className="list-group-item list-group-item-action">First item</a>
            <a href="#" className="list-group-item list-group-item-action disabled" >Second item</a>
            <a href="#" className="list-group-item list-group-item-action">Third item</a>
          </div>
        </div>


        <div className="container-md pt-3">
          <h2>Flush / Remove Borders</h2>
          <p>Use the .list-group-flush class to remove some borders and rounded corners:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">First item</li>
            <li className="list-group-item">Second item</li>
            <li className="list-group-item">Third item</li>
            <li className="list-group-item">Fourth item</li>
          </ul>
        </div>

        <div className="container-md pt-3">
          <p>Horizontal list group</p>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">First item</li>
            <li className="list-group-item">Second item</li>
            <li className="list-group-item">Third item</li>
            <li className="list-group-item">Fourth item</li>
          </ul>
        </div>

        <div className="container-md pt-3">

          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action ">Action item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-primary">Primary item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-info">Info item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Warning item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-danger">Danger item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Secondary item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-dark">Dark item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-light">Light item</a>
          </div>
        </div>

      </div>
    </>
  )
}