import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img className="img-fluid" style={{ "height": '1.5em', "width" : "auto" }}
                        src={`${process.env.PUBLIC_URL}/images/Cromatic.png`}
                        alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h3 className="text-white m-0" aria-current="page">Cromatic</h3>
                        </li>
                    </ul>
                </div>
                <a className="nav-link text-white small" aria-current="page" href="https://www.linkedin.com/in/h%C3%A9ctor-maga%C3%B1a/">Hector Magana</a>
            </div>
        </nav>

    )
}
