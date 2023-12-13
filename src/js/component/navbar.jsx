import React from "react";

function Navbar() {
    let content= (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4">
            <a className="navbar-brand" id="navbar-brand" href="#">Start Bootstrap</a>
            <div className="dropdown">
                <button className="navbar-toggler" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">About</a></li>
                    <li><a class="dropdown-item" href="#">Services</a></li>
                    <li><a class="dropdown-item" href="#">Portfolio</a></li>
                    <li><a class="dropdown-item" href="#">Contact</a></li>
                </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    return content;
}

export default Navbar;