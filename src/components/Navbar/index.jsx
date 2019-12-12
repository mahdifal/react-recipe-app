import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeContext from '../../Context/ThemeContext';

export default function index({ children }) {
    return (
        <ThemeContext.Consumer>
            {value =>
                <nav className={`navbar navbar-expand-sm fixed-top navbar-${value} bg-${value}`}>
                    <Link to='/' className="navbar-brand font-logo">
                        <span className="text-danger">
                            ببین و بپز
                </span>
                    </Link>
                    <div className="collapse navbar-collapse show ml-sm-5 mr-auto">
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
                    {children}
                </nav>
            }
        </ThemeContext.Consumer>
    )
}
