import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


 const Header = (props) => (

    <header>
      <h1 className="display-4 text-center text-uppercase p-3 mb-2">Welcome To My Portofolio</h1>

        <Nav className="float-right">
          <NavItem>
            <NavLink className="text-white" href="home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="contact">Contact</NavLink>
          </NavItem>
        </Nav>

      </header>
);

export default Header
