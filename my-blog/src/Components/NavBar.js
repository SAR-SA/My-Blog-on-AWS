import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import "../styles/NavBar.css"
// import { Link } from 'react-router-dom';

const NavTop = () => (
    <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand id="name" >Shawn's Blog</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/article-list">Articles</Nav.Link>
            </Nav>
        </Navbar>
        {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/article-list">Articles</Link>
            </li>
        </ul> */}
    </>
);

export default NavTop;