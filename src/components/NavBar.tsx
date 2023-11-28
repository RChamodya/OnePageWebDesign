import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../src/assets/images/logo.png"
import { Box } from '@mui/material';

function NavBar() {
  return (
    <>
     
     
      
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Box>home</Box>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;