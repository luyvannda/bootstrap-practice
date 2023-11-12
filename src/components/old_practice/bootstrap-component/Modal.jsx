

export default function Bootstrap() {
  return (
    <>

      <div className="container-md pt-3">
        <h3>Modal Example</h3>
        <p>Click on the button to open the modal</p>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId">
          Launch
        </button>

        <div className="modal fade" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, neque! Unde vel officiis quibusdam voluptates, incidunt veniam velit amet! Est vero nulla nisi facere laborum doloremque asperiores quam. Minima, nobis!</p>


                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, neque! Unde vel officiis quibusdam voluptates, incidunt veniam velit amet! Est vero nulla nisi facere laborum doloremque asperiores quam. Minima, nobis!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 