import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/img/logoExpressFood.png';
import { AiOutlinePhone } from "react-icons/ai";
import '../../assets/styles/header.css';


function NavBar() {
  return (
    <Navbar className='p-0 navbar' expand="lg">
      <Container className='p-0 h-100' fluid>
        <Navbar.Brand className='h-100 ps-2 ps-md-5 navbar-brand' href="#home">
          <Image className='logo-img' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle className='me-2' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-link text-uppercase">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Servives</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
          </Nav>
          <AiOutlinePhone size='30px' />
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;