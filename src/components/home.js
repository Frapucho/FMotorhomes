import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css"

export default function Home() {
  return (
    <div className="bg-light">
      <Container className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            <Image
              src="https://i.postimg.cc/T2ZPntgz/logo-FMHomes.jpg"
              fluid
            />
          </Col>
          <Col md={6}>
            <h1 className="display-4 text-primary mb-3 texto">Bienvenido a Friedrich Motorhomes</h1>
            <p className="lead mb-5">
              Nos dedicamos al equipamiento y modificacion de vehiculos utilitarios, adaptamos cada modificacion segun las necesidades y gustos de cada cliente.
            </p>
          
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <Image
              src="https://i.postimg.cc/qqZvHBgq/Whats-App-Image-2023-03-18-at-3-51-43-PM.jpg" style={{ width: '500px', height: '500px' }}
              fluid 
              rounded
            />
            <h3 className="mt-3 mb-2">Cocinas Funcionales</h3>
            <p>
              Nuestro equipo diseña cocinas completamente funcionales y adaptadas al espacio disponible dentro del vehiculo a modificar.
            </p>
          </Col>
          <Col md={4}>
            <Image
              src="https://i.postimg.cc/MT66cfQX/Whats-App-Image-2023-03-18-at-3-49-37-PM.jpg" style={{ width: '500px', height: '500px' }}
              fluid
              rounded
            />
            <h3 className="mt-3 mb-2">Baños a medida</h3>
            <p>
              Creamos baños completamente funcionales, para asegurar que ningun viaje sea demasiado largo.
            </p>
          </Col>
          <Col md={4}>
            <Image
              src="https://i.postimg.cc/0QXsbWvH/Whats-App-Image-2023-03-18-at-3-51-45-PM.jpg" style={{ width: '500px', height: '500px' }}
              fluid
              rounded
            />
            <h3 className="mt-3 mb-2">La comodidad del hogar</h3>
            <p>
              Dormitorio con todas las comodidades, climatizadores de aire, percheros, baules multiusos, entre otras adiciones.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            <Image
              src="https://e7.pngegg.com/pngimages/500/401/png-clipart-car-service-workshop-mechanic-maintenance-software-maintenance-text-service.png" 
              fluid
              rounded
              className="remove-bg"
            />
          </Col>
          <Col md={6}>
            <h2 className="text-primary mb-3 texto">Por que elegirnos?</h2>
            <p className="lead mb-5">
              En Friedrich Motorhomes nos comprometemos con el cliente, para brindar un trabajo con excelentes terminaciones, funcionalidad y comodidad total. Crea recuerdos de calidad, contactate con nosotros.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-check mr-2 text-primary"></i>Años de experiencia
              </li>
              <li>
                <i className="fas fa-check mr-2 text-primary"></i>Atencion a los detalles
              </li>
              </ul>
              </Col>
              </Row>
              </Container>
              </div>
  )}