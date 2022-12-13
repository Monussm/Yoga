import React from "react";
const Navbar=()=>{
    return<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Training</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Event</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Shop</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</>
}
export default Navbar;