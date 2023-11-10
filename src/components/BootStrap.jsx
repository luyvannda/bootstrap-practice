

export default function Bootstrap() {
  return (
    <>
      {/* Remove the .navbar-expand-* class to create a navigation bar that will always be vertical: */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#" >
          <img src="./avatar1.png" alt="an avatar logo" style={{ width: "40px;" }} className="rounded-pill"></img>

          <span className="navbar-text"> Navbar Text</span>
        </a>
      </nav>

    </>
  )
} 