import React from 'react';

import {Component} from 'react';

import './Content.css'


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}
