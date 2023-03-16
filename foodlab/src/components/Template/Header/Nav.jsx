import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../../assets/img/logoExpressFood.png';
import { AiOutlinePhone } from 'react-icons/ai';


function NavBar() {
  return (
    <Navbar className='p-0 navbar position-relative' expand='lg'>
      <Container className='p-0 h-100' >
        <Navbar.Brand className='h-100 ps-2 ps-md-5 navbar-brand' href='#home'>
          <Image className='logo-img' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle className='me-2' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto nav-link text-uppercase'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <Nav.Link href='#link'>Servives</Nav.Link>
            <Nav.Link href='#link'>Menu</Nav.Link>
            <Nav.Link href='#link'>Blogs</Nav.Link>
            <Nav.Link href='#link'>Contacts</Nav.Link>
          </Nav>
          <a href='tel:+37360873461' className='d-sm-none dotted-circle d-lg-flex justify-content-center align-items-center ms-md-2 ms-xl-0'>
            <AiOutlinePhone size='30px' />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;