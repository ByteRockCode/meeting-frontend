import React from 'react';

import {Component} from 'react';

import './Navbar.css'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    {this.props.children.map((child, i) => {
                        return <li key={i} >{child}</li>
                    })}
                </ul>
            </nav>
        );
    }
}
