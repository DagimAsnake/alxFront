import React from "react";
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Pdf Extractor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className={pathname === "/tableone" ? "nav-link active": "nav-link"} to='/tableone'>TableOne</Link>
                    <Link className={pathname === "/tabletwo" ? "nav-link active": "nav-link"} to='/tabletwo'>TableTwo</Link>
                    <Link className={pathname === "/tablethree" ? "nav-link active": "nav-link"} to='/tablethree'>TableThree</Link>
                    <Link className={pathname === "/tablefour" ? "nav-link active": "nav-link"} to='/tablefour'>TableFour</Link>
                </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar