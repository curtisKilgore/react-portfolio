import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Curtis Kilgore",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Web Developer",
        subTitle: "Always Learning, Always Growing",
        text: "Checkout My Projects",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container fluid={true} className="p-0">
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Curtis Kilgore</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
