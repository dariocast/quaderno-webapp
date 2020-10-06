import React, {useState} from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
import QTJumbo from "./components/QTJumbo/qt-jumbo";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Dettaglio from "./pages/Dettaglio";
import NuovaPartita from "./pages/NuovaPartita";
import ListaPartite from "./pages/ListaPartite";
import PrivateRoute from "./components/PrivateRoute";
import {AuthContext} from "./contexts/auth";

function App() {

    const existingToken = JSON.parse(localStorage.getItem("token"));
    const [authToken, setAuthToken] = useState(existingToken);

    const setToken = (data) => {
        localStorage.setItem("token", JSON.stringify(data));
        setAuthToken(data);
    };

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken:setToken }}>
            <Router>
                <QTJumbo title="Quaderno Torneo"/>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/lista">Partite</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute path="/lista" component={ListaPartite}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/dettaglio" component={Dettaglio}/>
                    <PrivateRoute path="/inserisci" component={NuovaPartita}/>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
