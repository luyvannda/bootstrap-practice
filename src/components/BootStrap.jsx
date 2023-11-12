// import { useEffect } from 'react';
// import * as bootstrap from 'bootstrap';

export default function Bootstrap() {

  return (
    <div className="container-md pt-3">

      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Second</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
              <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="scroll-spy-container" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi animi, temporibus cupiditate voluptatum architecto nihil et exercitationem dolore voluptas dolorem minus vero repellat, molestiae ad consequuntur soluta incidunt alias?</p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet tempora porro ab, doloremque a minima quaerat cumque facere, est, saepe expedita. Optio, tenetur! Quae quasi culpa quos, voluptatum eius eum?</p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, amet voluptatem provident a beatae facilis maiores officia debitis nesciunt dolorum recusandae voluptatibus ab, magnam quasi deleniti sapiente voluptate doloremque sit!</p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam alias omnis amet necessitatibus temporibus libero repudiandae provident aliquam quidem, exercitationem obcaecati dolorem officiis commodi, nemo sit saepe? Excepturi, id.</p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate, ad placeat cum obcaecati quibusdam quaerat atque. Exercitationem doloremque, repellendus aperiam nam nemo rerum hic pariatur voluptatibus quibusdam maiores reprehenderit.</p>
      </div>

    </div>

  )
} 