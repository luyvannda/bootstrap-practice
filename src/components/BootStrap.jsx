

export default function Bootstrap() {
  return (
    <>
      <div className="container pt-3">

        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#show1">
          Show
        </button>
        <div className="collapse" id="show1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ea officia omnis voluptate deleniti ipsa facere in facilis ad esse atque eos eaque, eum vero ipsum? Maxime alias iure labore?
        </div>
      </div>

      <div className="container-md pt-3">
        <p>For {`<a>`} tag we use href instead of data-bs-target for collapse id</p>
        <a href="#show2" className="btn btn-info" data-bs-toggle="collapse">Show</a>
        {/* We can add .show to make the collapsible contents showing up by default */}
        <div className="collapse show" id="show2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ea officia omnis voluptate deleniti ipsa facere in facilis ad esse atque eos eaque, eum vero ipsum? Maxime alias iure labore?
        </div>
      </div>

      <div className="container-md pt-3">
        <h2>Accordion</h2>

        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <a href="#collapse1" className="btn" data-bs-toggle="collapse">
                Collapsible Group Item #1
              </a>
            </div>
            <div id="collapse1" className="collapse show" data-bs-parent="#accordion">
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic aut omnis quae nostrum repudiandae possimus voluptatibus nemo. Sunt provident ipsa sit itaque nam officiis enim in quis nobis dignissimos. Officiis!
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a href="#collapse2" className="btn" data-bs-toggle="collapse">
                Collapsible Group Item #2
              </a>
            </div>
            <div id="collapse2" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic aut omnis quae nostrum repudiandae possimus voluptatibus nemo. Sunt provident ipsa sit itaque nam officiis enim in quis nobis dignissimos. Officiis!
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a href="#collapse3" className="btn" data-bs-toggle="collapse">
                Collapsible Group Item #3
              </a>
            </div>
            <div id="collapse3" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic aut omnis quae nostrum repudiandae possimus voluptatibus nemo. Sunt provident ipsa sit itaque nam officiis enim in quis nobis dignissimos. Officiis!
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}