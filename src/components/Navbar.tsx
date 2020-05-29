// @flow
import * as React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (<nav className="navbar bg-dark navbar-dark navbar-expand-lg">
            <div className="navbar-brand"> App</div>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" exact  to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar