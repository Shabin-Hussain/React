import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';




function Header() {
     const wishlistArray = useSelector((state)=>state.wishlistReducer)
     const cartArray = useSelector((state)=>state.cartReducer)

  return (
    <>
    <Navbar expand="lg" className="w-100" style={{backgroundColor:'blueviolet',top:'0px',position:'fixed',zIndex:'1'}}>
      <Container fluid>

      <Link to={'/'} style={{textDecoration:'none'}}>  <Navbar.Brand href="#home" className='ms-md-5 text-white'><FontAwesomeIcon icon={faCartShopping} />E-cart</Navbar.Brand></Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        <Link to={'/wishlist'}>  <button className='btn border rounded text-white me-md-5'>❤️WishList <Badge bg="secondary">{wishlistArray.length}</Badge>{/* <span className=' px-1 home' >7</span> */}</button></Link>

          <Link to={'/cart'}> <button className='btn border rounded text-white me-md-4'>🛒Cart <Badge bg="secondary">{cartArray.length}</Badge></button></Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header