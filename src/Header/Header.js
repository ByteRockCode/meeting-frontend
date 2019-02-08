import React from 'react';

import {Component} from 'react';
import {Link} from 'react-router-dom';

import './Header.css'


export default class Header extends Component {
    render() {
        console.log(this.props.option);

        // debugger;

        // this.props.option.className = 'header__option'

        if (this.props.option) {
            const className = `${this.props.option && this.props.option.className} header__option`;
            const props = { ...this.props.option, className: className };
            var option = React.cloneElement(this.props.option, props);
        }

        return (
            <header className="header">
                {this.props.back && <Link className="header__back" to={this.props.back}><i className="fa fa-chevron-left" /></Link>}
                <h1 className="header__title">{this.props.title}</h1>
                {option && option}
            </header>
        );
    }
}
