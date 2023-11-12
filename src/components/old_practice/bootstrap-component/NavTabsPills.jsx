

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


      <div className="container-md pt-3 pb-5">
        <h3>Pills with Dropdown</h3>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active">Active</a></li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">Link 1</a></li>
              <li><a href="#" className="dropdown-item">Link 2</a></li>
              <li><a href="#" className="dropdown-item">Link 3</a></li>
            </ul>

          </li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>
      </div>


      <div className="container-md pt-3 pb-5">
        <h3>Nav Tabs with Dropdown</h3>

        <ul className="nav nav-tabs">
          <li className="nav-item"><a href="#" className="nav-link active">Active</a></li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">Link 1</a></li>
              <li><a href="#" className="dropdown-item">Link 2</a></li>
              <li><a href="#" className="dropdown-item">Link 3</a></li>
            </ul>

          </li>
          <li className="nav-item"><a href="#" className="nav-link">link</a></li>
          <li className="nav-item"><a href="#" className="nav-link disabled">disabled</a></li>
        </ul>
      </div>

      <div className="container-md pt-3 pb-5">
        <h3>Toggleable / Dynamic Tabs</h3>

        <ul className="nav nav-tabs">
          <li className="nav-item"><a href="#home" className="nav-link active" data-bs-toggle="tab">Home</a></li>
          <li className="nav-item"><a href="#tab1" className="nav-link" data-bs-toggle="tab">Tab 1</a></li>
          <li className="nav-item"><a href="#tab2" className="nav-link" data-bs-toggle="tab">Tab 2</a></li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane container active" id="home">
            <h3>Home</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur nulla officiis voluptatum, quae totam cum magni animi nisi deserunt quam at perferendis iure incidunt repudiandae rem libero, ipsam repellat.</p>
          </div>
          <div className="tab-pane container fade" id="tab1">
            <h3>Tab 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus error possimus maiores dolores praesentium, quia porro, amet alias nobis perferendis accusantium ipsum? Cupiditate architecto alias, praesentium minus modi laboriosam ut.
            </p>
          </div>
          <div className="tab-pane container fade" id="tab2">
            <h3>Tab 2</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam vitae necessitatibus velit eos pariatur dicta magnam odio assumenda, iste illum ipsum, quod ab perferendis sed doloribus laborum? Error, quidem?
            </p>
          </div>
        </div>
      </div>


      <div className="container-md pt-3 pb-5">
        <h3>Toggleable / Dynamic Pills</h3>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#home2" className="nav-link active" data-bs-toggle="pill">Home</a></li>
          <li className="nav-item"><a href="#pill1" className="nav-link" data-bs-toggle="pill">Tab 1</a></li>
          <li className="nav-item"><a href="#pill2" className="nav-link" data-bs-toggle="pill">Tab 2</a></li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane container active" id="home2">
            <h3>Home</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur nulla officiis voluptatum, quae totam cum magni animi nisi deserunt quam at perferendis iure incidunt repudiandae rem libero, ipsam repellat.</p>
          </div>
          <div className="tab-pane container fade" id="pill1">
            <h3>Pill 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus error possimus maiores dolores praesentium, quia porro, amet alias nobis perferendis accusantium ipsum? Cupiditate architecto alias, praesentium minus modi laboriosam ut.
            </p>
          </div>
          <div className="tab-pane container fade" id="pill2">
            <h3>Pill 2</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam vitae necessitatibus velit eos pariatur dicta magnam odio assumenda, iste illum ipsum, quod ab perferendis sed doloribus laborum? Error, quidem?
            </p>
          </div>
        </div>
      </div>

    </>
  )
}