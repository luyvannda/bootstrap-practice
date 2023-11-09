

export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3">

        <ul className="nav">
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>

        <ul className="nav justify-content-center">
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>

        <ul className="nav justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>

        <ul className="nav flex-column">
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>
      </div>

      <div className="container-md pt-3">
        <h3>Navigation Tabs</h3>
        <p>Turn the nav menu into navigation tabs with the .nav nav-tabs class. Add the active class to the active/current link. If you want the tabs to be togglable, see the last example on the tutorial page.</p>
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item"><a href="#" className="nav-link active">Active</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>
      </div>

      <div className="container-md pt-3">
        <h3>Nav Pills</h3>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item"><a href="#" className="nav-link active">Active</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>
      </div>
    </>
  )
}