import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBarMenu({ items }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {items.map(item => (
            <Nav.Link href={item.url} key={item.id}>
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarMenu;
