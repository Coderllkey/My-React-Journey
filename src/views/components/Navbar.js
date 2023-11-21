import {   NavLink } from 'react-router-dom';


const Navbar = _ =>{
    return (
      <div>

<nav class="navbar navbar-expand-lg col-lg-9 mx-auto">
  <div class="container">
    <a class="navbar-brand  fs-4" href="#">My-App</a>
    <button class="btn text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>

  
  </div>
</nav>






<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Navigation Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="list-group list-group-flush">
      <li class="list-group-item border-0"> <NavLink to="/"  className={({ isActive, isPending }) =>isPending ? "text-info" : isActive ? "text-danger h5 text-decoration-none" : "text-decoration-none"
  }>Home</NavLink></li>

        <li class="list-group-item border-0"> <NavLink className={({ isActive, isPending }) =>
    isPending ? "text-info" : isActive ? "text-danger text-decoration-none h5" : "text-decoration-none"
  } to="/story">Story</NavLink></li>
        <li class="list-group-item border-0"> <NavLink className={({ isActive, isPending }) =>
    isPending ? "text-info" : isActive ? "text-danger text-decoration-none h5" : "text-decoration-none"
  } to="/service">Service</NavLink></li>
        <li class="list-group-item border-0"> <NavLink className={({ isActive, isPending }) =>
    isPending ? "text-info" : isActive ? "text-danger text-decoration-none h5" : "text-decoration-none"
  } to="/contact">Contact</NavLink></li>

      </ul>
  </div>
</div>
      </div>
    )
  }
  
  export default Navbar;