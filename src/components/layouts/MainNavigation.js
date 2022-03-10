import "./MainNavigation.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import {useContext} from 'react'
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext)
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand to="/">brand-meetups</Navbar.Brand>
          <Nav className="me-auto">
            
            <Link to={"/"}>AllMeetups</Link>
            <Link to={"/newmeetups"}>NewMeetups</Link>
            <Link to={"/favorites"}>
                Favorites- 
                {favoriteCtx.totalFavorites}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavigation;
