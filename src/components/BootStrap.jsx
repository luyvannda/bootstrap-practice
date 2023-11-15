// import { useEffect } from 'react';
// import * as bootstrap from 'bootstrap';

export default function Bootstrap() {

  return (
    <>
      <div className="container mt-3">
        <h3>Flex item</h3>
        <div className="d-flex p-3 bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
      </div>

      <div className="container mt-3">
        <h3>Reverse row flex item</h3>
        <div className="d-flex flex-row-reverse bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
      </div>


      <div className="container mt-3">
        <h3>Inline flex item</h3>
        <div className="d-inline-flex p-3 bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
      </div>

      <div className="container mt-3">
        <h3>Flex column item</h3>
        <div className="d-flex flex-column bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
        <h3>Column reverse item</h3>
        <div className="d-flex flex-column-reverse bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
      </div>

      <div className="container mt-3">
        <h3>Justify Contents</h3>

        <div className="d-flex justify-content-end bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
        <div className="d-flex justify-content-center bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>

        <div className="d-flex justify-content-between bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
        <div className="d-flex justify-content-around bg-secondary text-white">
          <div className="p-2 bg-info">Flex item 1</div>
          <div className="p-2 bg-warning">Flex item 2</div>
          <div className="p-2 bg-primary">Flex item 3</div>
        </div>
      </div>
    </>
  )
} 