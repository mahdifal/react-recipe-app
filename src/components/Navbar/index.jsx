import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function index() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light gb-light">
            <Link to='/' className="navbar-brand">My Logo</Link>
            <div className="collapse navbar-collapse show ml-sm-5">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <NavLink to='/' exact className="nav-link">
                            خانه
                    </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/recipes" className="nav-link">
                            دستور غذا
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
