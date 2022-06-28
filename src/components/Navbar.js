import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Navbar() {

    const items=useSelector((state)=>state.card)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">STORE APP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link fw-bold" ><i className="bi bi-basket2-fill"></i> {items.length}</span>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
