import React from 'react';
import './App.css';
import Login from "./login";
import {Container, Jumbotron} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Jumbotron fluid className="my-jumbo">
            <Container>
                <h1>Benvenuto</h1>
            </Container>
        </Jumbotron>
        <Login />
    </div>
  );
}

export default App;
