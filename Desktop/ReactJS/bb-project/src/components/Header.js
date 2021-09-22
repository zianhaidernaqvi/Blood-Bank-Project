import React from 'react'
import './Header.css'

 function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg nav-bgcolor">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SERVICES</a>
        </li>
      </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{marginRight:'20px'}}>
                <a className="nav-link" aria-current="page" href="#">LOGIN</a>
            </li>
        </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header;
