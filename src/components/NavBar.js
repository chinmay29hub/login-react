import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Robo Bionics
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/RegisterPage">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Router>
  <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/RegisterPage">
            <RegisterPage />
          </Route>
          
        </Switch>
      </Router>
   

</>
    )
}

export default NavBar