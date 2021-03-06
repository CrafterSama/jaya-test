import React from 'react';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="{#}">
            Jaya Test
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a to="#top" className="nav-link">
                        Graphics <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a to="#posts" className="nav-link">
                        API Connection
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;
