import React from "react";
import {useAuth} from "../../contexts/auth";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Admin(props) {
    const { setAuthToken } = useAuth();

    function logout() {
        setAuthToken();
    }

    return (
        <Container>
            <h3>Pannello di controllo</h3>
            <Link to="/inserisci">Inserisci partita</Link>
            <Button variant="outline-danger" onClick={logout}>Esci</Button>
        </Container>
    );
}

export default Admin;
