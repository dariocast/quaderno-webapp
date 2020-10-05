import React, {useState} from "react";
import './login.css';
import {Alert, Button, Container, Form} from "react-bootstrap";
import {BASEURL} from "./constants";
import sha1 from 'js-sha1'

function Login() {
    const [utenteAutenticato, setUtenteAutenticato] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('u'));
    const [password, setPassword] = useState(localStorage.getItem('p'));
    const [ricorda, setRicorda] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    if (utenteAutenticato) {
        return (
            <Container>
                {show ? <CustomAlert onClose={handleClose} type={type} message={message}/> : <></>}
                <Utente username={username}/>
                <BottoneLogout onClick={() => {
                    setUtenteAutenticato(false);
                    setUsername(localStorage.getItem('u'));
                    setPassword(localStorage.getItem('p'));
                    setRicorda(false);
                }}/>
            </Container>
        );
    } else {
        return (
            <Container>
                {show ? <CustomAlert onClose={handleClose} type={type} message={message}/> : <></>}
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
                    <Button type="submit" value="Submit" variant="outline-primary" onClick={handleLogin}>Login</Button>
                </Form>
            </Container>
        );
    }

    function handleLogin(event) {
        if (username && password) {
            event.preventDefault();
            if (ricorda) {
                localStorage.setItem('u', username);
                localStorage.setItem('p', password);
            }

            postCredential({
                'username': username,
                'password': sha1(password)
            })
                .then(data => {
                    if(data.username) {
                        setUtenteAutenticato(true);
                        setUsername(data.username);
                        setShow(true);
                        setType("success");
                        setMessage('Accesso riuscito');
                    } else {
                        setShow(true);
                        setType("danger");
                        setMessage('Accesso non riuscito, errore: '+data.message);
                    }
                });
        }
    }

    function handleClose() {
        setShow(false);
    }

    async function postCredential(data = {}) {
        const response = await fetch(
            BASEURL+"/admin/auth.php",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );
        return response.json();
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

function CustomAlert(props) {
    return (
        <Alert variant={props.type} onClose={props.onClose} dismissible>
            {props.message}
        </Alert>
    );
}

function Utente(props) {
    return <h4>Bentornato {props.username}!</h4>
}

function BottoneLogout(props) {
    return <Button variant="danger" onClick={props.onClick}>Logout</Button>
}

export default Login;
