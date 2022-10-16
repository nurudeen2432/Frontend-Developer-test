import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../components/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import explore from "../components/explore.png";
import crop from "../components/crop.png";
import star from "../components/str.svg";
const Discover = () => {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1>
              <div className="display-5 fw-bold mt-0 text-light dis">
                Discover amazing art around the
              </div>
              <div className="display-5 fw-bold mt-0 dos">world</div>
            </h1>
            <p className="lead my-4 text-light">
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and more
            </p>
            <img src={explore} alt="login" className="login" />
          </div>
                <img src={star} alt="" className="img-fluid mt-5 d-none d-md-block" style={{ width: "40px"}}/>
          <div className="col-md-5 text-center d-none d-md-block">
            <span data-bs-placement="bottom" title="Arts">
              <img
                className="img-fluid mt-5 d-none d-md-block"
                src={crop}
                alt="museum_art"
              />
            </span>
          </div>
        </div>
      </div>
    );
};

export default Discover;
