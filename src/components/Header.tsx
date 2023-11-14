import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

type HeaderProps = {
  isLoggdIn: boolean
  handleLogOut: () => void
}

export default function Header({isLoggedIn, handleLogOut}:HeaderProps) {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Kekambas Blog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>

          { isLoggedIn ? (
            
            <Nav.Link as={Link} to='/' onClick={handleLogOut}>Logout</Nav.Link>
            
            
          ) : (
            <>
          
            
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
              </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
