import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";
import React from "react";
import './styles.css';
import {Link} from "react-router-dom";

function QTJumbo(props) {
    return (
        <Jumbotron fluid className="my-jumbo">
            <Container>
                <Row>
                    <Col>
                        <h1>{props.title}</h1>
                    </Col>
                    <Col xs={1}>
                        <Button variant="success"><Link to="/admin">Login</Link></Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default QTJumbo
