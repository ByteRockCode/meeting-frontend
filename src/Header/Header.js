import React from 'react';

import {Component} from 'react';

import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">{this.props.title}</h1>
            </header>
        );
    }
}
