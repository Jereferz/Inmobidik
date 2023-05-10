//para el navbar 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//para los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//para las rutas
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//vistas
import Home from '../view/home';
import Acerca from '../view/acercaDe';


function CollapsibleExample() {
    return (
        <>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Inmobidik</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Item><Link to='/' className='nav-link'>Home</Link></Nav.Item>
                                <Nav.Item><Link to='/acerca' className='nav-link'>Acerca</Link></Nav.Item>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <FontAwesomeIcon icon={faUser} />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/acerca' element={<Acerca />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default CollapsibleExample;