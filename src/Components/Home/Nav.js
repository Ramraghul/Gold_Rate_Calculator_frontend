import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand topbar mb-4 static-top shadow trans">
                {/* <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                    <span className="navbar-brand mb-0 text-black h1">Welcome</span>
                        <div className="input-group-append">
                        </div>
                    </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item dropdown no-arrow">
                        <Link
                            className="nav-link dropdown-toggle"
                            id="userDropdown"
                            role="button"
                        >
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small text-black">
                            </span>
                            <img className="img-profile rounded-circle" src="./avatar.png" alt="Avatar"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav