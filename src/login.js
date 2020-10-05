import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            utenteAutenticato: false
        };
    }

    handleLoginClick() {
        this.setState({utenteAutenticato: true});
    }

    handleLogoutClick() {
        this.setState({utenteAutenticato: false});
    }

    render() {
        const utenteAutenticato = this.state.utenteAutenticato;

        if (utenteAutenticato) {
            return (
                <div>
                    <Utente/>
                    <BottoneLogout onClick={this.handleLogoutClick}/>
                </div>
            );
        } else {
            return (
                <div>
                    <Ospite/>
                    <BottoneLogin onClick={this.handleLoginClick}/>
                </div>
            );
        }
    }
}

function Utente(props) {
    return <h1>Bentornato!</h1>
}

function Ospite() {
    return <h1>Autenticati, per favore</h1>
}

function BottoneLogin(props) {
    return <button onClick={props.onClick}>Login</button>
}

function BottoneLogout(props) {
    return <button onClick={props.onClick}>Logout</button>
}

export default Login;
