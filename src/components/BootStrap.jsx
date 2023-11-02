export default function Bootstrap() {
  return (
    <>
      <div className="container-md">
        <div className="alert alert-success alert-dismissible fade show">
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
          <strong>Success!</strong> This alert box could indicate a successful or positive action.
        </div>
        <div className="alert alert-info alert-dismissible fade show">
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
          <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
        </div>



      </div >
    </>
  )
}