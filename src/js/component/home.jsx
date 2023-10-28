import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="jumbotron">
        <h1 className="display-4">Welcome to your Home Page!</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <div className="card-body text-center bg-light">
                <button className="btn btn-primary">
                  Find Out More!
                </button>
              </div>
            </div>
          </div>
		  <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <div className="card-body text-center bg-light">
                <button className="btn btn-primary">
                  Find Out More!
                </button>
              </div>
            </div>
          </div>
		  <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <div className="card-body text-center bg-light">
                <button className="btn btn-primary">
                  Find Out More!
                </button>
              </div>
            </div>
          </div>
		  <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <div className="card-body text-center bg-light">
                <button className="btn btn-primary">
                  Find Out More!
                </button>
              </div>
            </div>
          </div>
		  
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;