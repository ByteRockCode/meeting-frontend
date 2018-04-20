import React, { Component } from 'react';
import './Landing.css';


class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <header className="landing__header">
                    <h2 className="landing__subtitle">ByteRock</h2>
                    <h1 className="landing__title">Meeting</h1>
                </header>

                <div className="landing__content">
                    <a className="button button--grey" href="#sigin">Iniciar Sesión</a>
                    <a className="button button--blue" href="#singup">Registrarse</a>
                </div>
            </div>
        );
    }
}


export default Landing;
