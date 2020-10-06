import React, {useState} from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import sha1 from 'js-sha1'
import {BASEURL} from "../../services/constants";
import axios from "axios";
import {useAuth} from "../../contexts/auth";
import {Redirect} from "react-router-dom";


function Login(props) {
    const [username, setUsername] = useState(localStorage.getItem('u'));
    const [password, setPassword] = useState(localStorage.getItem('p'));
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const {setAuthToken} = useAuth();
    const [ricorda, setRicorda] = useState(false);

    const referer = props.location.state.referer || '/';

    if (isLoggedIn) {
        return <Redirect to={referer}/>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoComplete="username"
                                name="username"
                                onChange={handleChange}
                                type="text"
                                placeholder="Inserisci username"
                                value={username ? username : ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                autoComplete="current-password"
                                name="password"
                                onChange={handleChange}
                                type="password"
                                placeholder="Password"
                                value={password ? password : ''}

                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                name="ricorda"
                                onChange={handleChange}
                                type="checkbox"
                                label="Ricordami"
                            />
                        </Form.Group>
                        <Button type="submit" value="Submit" variant="outline-primary"
                                onClick={handleLogin}>Login</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                {isError && <Alert variant="danger">Username e/o password errati</Alert>}
            </Row>
        </Container>
    );

    function handleLogin(event) {
        if (username && password) {
            event.preventDefault();
            if (ricorda) {
                localStorage.setItem('u', username);
                localStorage.setItem('p', password);
            }
            axios.post(
                BASEURL + "/admin/auth.php",
                {
                    username: username,
                    password: sha1(password)
                },
                {
                    headers: {'Content-Type': 'application/json'}
                }
            )
                .then(result => {
                    if (result.status === 200) {
                        console.log(result.data);
                        setAuthToken(result.data);
                        setLoggedIn(true);
                    } else {
                        console.log(result.data['message']);
                        setIsError(true);
                    }
                }).catch(e => {
                console.log(e);
                setIsError(true);
            });
        }
    }

    function handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'ricorda':
                setRicorda(value);
                break;
            default:
                break;
        }
    }
}

export default Login;
