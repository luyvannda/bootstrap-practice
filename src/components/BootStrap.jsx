

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
        <div className="collapse show" id="show2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ea officia omnis voluptate deleniti ipsa facere in facilis ad esse atque eos eaque, eum vero ipsum? Maxime alias iure labore?
        </div>
      </div>

      <div className="container-md pt-3">
        <h2>Accordion</h2>
      </div>
    </>
  )
}