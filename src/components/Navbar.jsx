import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-md">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Shop</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/cart">Shopping Cart</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;