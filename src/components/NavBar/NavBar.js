import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href="/"className='logo'>CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="ms-auto my-2 my-lg-0 m-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
         
           
          </Nav>
       
      </Container>
    </Navbar>
  );
}

export default NavBar;