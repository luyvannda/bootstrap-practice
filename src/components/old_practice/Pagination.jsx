
export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3">
        <h2>Pagination</h2>
        <p>To create a basic pagination, add the .pagination class to an ul element. Then add the .page-item to each li element and a .page-link class to each link inside li:</p>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item disabled"><a className="page-link" href="#"> Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">2</a>
            </li>
            <li className="page-item"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">Next</a></li>
          </ul>
        </nav>

        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>


        <nav aria-label="Page navigation">
          <ul className="pagination pagination-sm justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item" aria-current="page"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item active"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

        <h2>Breadcrumbs</h2>
        <p>The .breadcrumb class indicates the current page&apos;s location within a navigational hierarchy:</p>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Photos</a></li>
            <li className="breadcrumb-item"><a href="#">Summer 2017</a></li>
            <li className="breadcrumb-item active" aria-current="page">Italy</li>
            <li className="breadcrumb-item"><a href="#">Rome</a></li>
          </ol>
        </nav>

      </div>
    </>
  )
}