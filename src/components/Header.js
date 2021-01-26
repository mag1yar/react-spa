import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Navbar.Brand as={Link} to="/">
        React SPA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav.Link as={Link} to="/card">
          Карта клиента
        </Nav.Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/add">
            Добавить
          </Nav.Link>
        </Nav>
        {/* <Form inline>
          <Form.Control type="text" placeholder="ID, Имя" className="mr-sm-2" />
          <Button variant="outline-primary">Найти</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
