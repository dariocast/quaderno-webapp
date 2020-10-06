import React, {useState} from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dettaglio from "./pages/Dettaglio";
import NuovaPartita from "./pages/NuovaPartita";
import ListaPartite from "./pages/ListaPartite";
import PrivateRoute from "./components/PrivateRoute";
import {AuthContext} from "./contexts/auth";
import Admin from "./pages/Admin";
import {Nav, Navbar} from "react-bootstrap";
import {BASEURL} from "./services/constants";

function App() {

    const existingToken = localStorage.getItem("token");
    const [authToken, setAuthToken] = useState(existingToken);

    const setToken = (data) => {
        if (data) {
            localStorage.setItem("token", JSON.stringify(data));
            setAuthToken(data);
        } else {
            localStorage.removeItem("token");
            setAuthToken(false);
        }
    };

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken:setToken }}>
            <Router basename={BASEURL}>

                <Navbar bg="success" expand="lg">
                    <Navbar.Brand href="/">Quaderno Torneo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/admin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route exact path="/" component={Home}/>
                <Route path="/lista" component={ListaPartite}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/admin" component={Admin}/>
                <PrivateRoute path="/dettaglio" component={Dettaglio}/>
                <PrivateRoute path="/inserisci" component={NuovaPartita}/>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
