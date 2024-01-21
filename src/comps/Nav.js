import React from 'react'
import '../styles/compsStyle/nav.css'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Alemeno Frontend Task</a>
                <div className='profile-icon-head'>
                    <NavLink to="/profile"><i className="bi bi-person-circle"></i></NavLink>
                </div>
        </nav>
    )
}

export default Nav