import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../components/logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import login from "../components/login.png";
import explore from "../components/explore.png";

function Navigation() {
  return (
    <Navbar
          bg="rgba(17, 12, 0, 1)"
          variant="dark"
          expand="lg"
          className="fs-4 flex-grow-1 px-5"
    >
      <Navbar.Brand href="#home" className="d-flex align-items-center ">
        <img src={logo} alt="logo" />
        Artisto
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="flex-column align-items-end "
      >
        <Nav className="d-flex mx-3">
          <Nav.Link
            href="#home"
            className="fs-6 text-light d-flex align-items-center"
          >
            Events
          </Nav.Link>
          <Nav.Link
            href="#features"
            className="fs-6 text-light d-flex align-items-center"
          >
            Museum
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className="fs-6 text-light align-items-center d-flex align-items-center"
          >
            Arts
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className="fs-6 d-flex align-items-center text-light"
          >
            Gallaries
          </Nav.Link>
          <Nav.Link
            href="#login"
            className=" text-light d-flex align-items-center"
          >
            <img src={login} alt="login" className="login" />
          </Nav.Link>
          <Nav.Link
            href="#explore"
            className=" text-light d-flex align-items-center"
          >
            <img src={explore} alt="login" className="login" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
