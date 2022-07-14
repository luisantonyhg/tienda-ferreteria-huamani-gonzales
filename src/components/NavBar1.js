

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import {Container,Nav,Navbar} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function Navbar1(){
    return (
      <>
      <Navbar bg="dark" variant="blue">
        <Container>
          <Navbar.Brand as={Link} to="/">MI FERRETERIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/" >INICIO</Nav.Link>
            <Nav.Link as={Link} to="/contacto" >CONTACTAME</Nav.Link>
            <Nav.Link as={Link} to="/informacion">INFORMACION</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section>
        <Outlet>

        </Outlet>
      </section>
      </>
    );
}

export default Navbar1;