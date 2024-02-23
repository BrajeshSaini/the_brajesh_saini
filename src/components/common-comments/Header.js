import React, { useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";

/*
    To make your page scroll to the top on route change in React JS, you can use the useEffect and useLocation hooks from react-router-dom. Here’s an example of how you can do this1
*/
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./../../pages/Home";
import AboutPage from "./../../pages/AboutPage";
import ContactPage from "./../../pages/ContactPage";
import PortfolioPage from "./../../pages/PortfolioPage";
import MySkillPage from "./../../pages/MySkillPage";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from './../../assets/images/logo.png';


const ScrollToTop = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
}


function Header() {

    const myRef = useRef(null);                                                   // Just Like ViewChild and Template Ref Variable;
    const [isCollapsed, setIsCollaped] = useState(false);

    const handleNavBtnClick = () => {
        checkForClass();
    }

    const checkForClass = () => {
        // console.log(myRef)
        // console.log(myRef.current)                                              // Give Current Div or Element
        // console.log(myRef.current.className)                                    // See All Classes of Current Div or Element
        if (myRef.current) {
            const elementClasses = myRef.current.className.split(' ');            // Split by space and store in elementClasses Array (string)
            //   console.log(elementClasses)
            const desiredClass = 'show'; // Replace with the class you want to check
            if (elementClasses.includes(desiredClass)) {                          // Check desiredClass in Array or not
                // console.log(`Element contains the class "${desiredClass}"`);
                document.getElementById('basic-navbar-nav').classList.remove('show');
            } else {
                // console.log(`Element does not contain the class "${desiredClass}"`);
            }
            setIsCollaped(true);
        }
    };


    return (
        <>
            <Router>
                <ScrollToTop>

                    <Navbar expand="lg" className="py-0">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                <Image src={logo} className="logo_img" rounded />
                                <span className="logo_txt"> Brajesh Saini</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle_btn" className={isCollapsed ? 'collapsed' : ''} />
                            <Navbar.Collapse ref={myRef} id="basic-navbar-nav" >
                                <Nav className="ms-auto nav_links">
                                    <Nav.Link as={Link} to="/" onClick={handleNavBtnClick}>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about" onClick={handleNavBtnClick}>About</Nav.Link>
                                    <Nav.Link as={Link} to="/my-skills" onClick={handleNavBtnClick}>My Skills</Nav.Link>
                                    <Nav.Link as={Link} to="/portfolio" onClick={handleNavBtnClick}>Portfolio</Nav.Link>
                                    <Nav.Link as={Link} to="/contact" onClick={handleNavBtnClick}>Contact</Nav.Link>
                                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                    </NavDropdown> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    {/* <nav>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>

                        <li>
                            <Link to="/contact" >Contact</Link>
                        </li>
                    </ul>
                </nav> */}
                    <Routes>
                        <Route path='/' element={< Home />}></Route>
                        <Route path='/about' element={< AboutPage />}></Route>
                        <Route path='/contact' element={< ContactPage />}></Route>
                        <Route path='/portfolio' element={< PortfolioPage />}></Route>
                        <Route path='/my-skills' element={< MySkillPage />}></Route>
                    </Routes>
                </ScrollToTop>
            </Router>

            <Outlet />

        </>
    )
}

export default Header;