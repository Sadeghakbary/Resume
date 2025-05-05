import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbars() {
  return (
    <>
  <Navbar bg="primary" data-bs-theme="dark">
  <Container className="d-flex align-items-center ">
    <img
      src={"src/assets/OIP.jpg"}            
      width={100}
      height={100}
      className="logo-picture"
    />
   
    <div className="d-flex flex-column ms-2">
      <Navbar.Text>Sadegh Akbary</Navbar.Text>
      <Navbar.Text>React Developer</Navbar.Text>
    </div>
  </Container>
</Navbar>

    </>
  );
}
