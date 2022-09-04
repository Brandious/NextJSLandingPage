import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
         <Container className="contact">
      <span style={{fontWeight: 1000}}>Kontaktirajte nas: </span>
info@vedras.hr |
+385 98 9608 920
        </Container>
      <Navbar light expand="md" className="navParent">
        <Container className="navContainer">
          <NavbarBrand href="/" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <span className="LogoTitle">
            VEDRAS
            </span>
            <span>Event Profesionals</span>  
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#new">New</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#covidfree">#covidFree</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#LanguageChange">EN</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;