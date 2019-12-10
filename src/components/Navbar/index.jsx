import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function index() {
    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
            <Link to='/' className="navbar-brand font-logo">
                <span className="text-danger">
                    ببین و بپز
                </span>
            </Link>
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
