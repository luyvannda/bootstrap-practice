export default function Bootstrap() {
  return (
    <>
      <div className="container-md border">

        <div className="row pb-3 text-center">
          <div className="col-md-8">
            <div className="p-3">col 1</div>
            <div className="row">
              <div className="col-md-4 p-3">col-md-4</div>
              <div className="col-md-4 p-3">col-md-4</div>
              <div className="col-md-4 p-3">col-md-4</div>
            </div>
          </div>
          <div className="col-md-4">Col 2</div>
        </div>
      </div>
    </>
  )
}