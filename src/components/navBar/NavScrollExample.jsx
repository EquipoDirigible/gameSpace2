import React from 'react';
//nav copiado de boostrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavScrollExample.css'

function NavScrollExample() {
  return (
    <Navbar className='navbarcolor' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Game-Space</Navbar.Brand>
        <img src='src\components\navBar\Logo_game_space-removebg-preview 1.png' className='LogoGameSpaceNavbar'/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="#action1">Your Products</Nav.Link>
            <Nav.Link href="#action2">Mail</Nav.Link>
            <Nav.Link href="#action2">Favoritos</Nav.Link>
            <Nav.Link href="#action2">Sold</Nav.Link>
            <Nav.Link href="#action2">Stadistics</Nav.Link>
            <Nav.Link href="#action2">Wallet</Nav.Link>
            <Nav.Link href="#action2">Configuration</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;