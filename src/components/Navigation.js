import React from 'react';
import {NavLink} from "react-router-dom";

export const Navigation = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className="navbar-brand">
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact
                >
                    Main page
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/about"
                >
                    About
                </NavLink>
            </li>

        </ul>
    </nav>
)

