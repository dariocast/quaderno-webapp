import {Container, Jumbotron} from "react-bootstrap";
import React from "react";
import './styles.css';

function QTJumbo(props) {
    return (
        <Jumbotron fluid className="my-jumbo">
            <Container>
                <h1>{props.title}</h1>
            </Container>
        </Jumbotron>
    );
}

export default QTJumbo
