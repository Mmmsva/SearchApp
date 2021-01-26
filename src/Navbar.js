import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="container navbar">
                <div className="navbar-logo">
                    <h1>Studio.</h1>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li><Link exact to="/">Home</Link></li>
                        <li><Link exact to="/About">About</Link></li>
                        <li><Link exact to="/Blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="button">
                    <a href="#">Contact Us</a>
                </div>
            </div>
        )
    }
}

export default Navbar