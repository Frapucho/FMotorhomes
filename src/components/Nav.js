import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../App.css";




function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <div>
              <img src="/logo.png" className="nav-img-main" alt="" />
              FMotorhomes
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
          {/*     <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/Clientes" className="nav-link">
                  Clientes Satisfechos
                </Link>
              </li>

              <li className="nav-item">
                <Button variant="primary" onClick={handleShow}>

                  Contacto
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Contacto</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <p>Para más información, no dudes en contactarnos:</p>
                    <ul>
                        <li>Teléfonos:</li>
                        <ul><li>Manuel: +54 9 3765 11 6337</li>
                        <li>Oscar: +54 9 3754 45 3126</li>
                      </ul>
                      
                    </ul>
                    <ul>
                        
                        <li>Email:</li>
                        <ul><li>ramiro0234927542@gmail.com</li></ul>
                        
                      </ul>
                      <li>Redes sociales:</li>
                      <ul>

                        <li><a href="https://instagram.com/friedrich_motorhome?igshid=YmMyMTA2M2Y=">Instagram</a></li>

                      </ul>
                  </Offcanvas.Body>
                </Offcanvas>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}



export default Nav;