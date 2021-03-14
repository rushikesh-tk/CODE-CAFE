import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>CodeCafe</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route
                            render={({ history }) => (
                                <SearchBox history={history} />
                            )}
                        />
                        {/*<Nav className="ml-auto">
                            <LinkContainer to="/favourites">
                                <Nav.Link>
                                    <i className="fas fa-heart"></i> Favourites
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
