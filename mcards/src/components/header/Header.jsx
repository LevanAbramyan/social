import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div className="header">
            <nav>
                <div className="nav-wrapper">
                    <Link to='/' className="brand-logo" ><i className="material-icons">cloud</i></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/cards'>Users</NavLink></li>
                        <li><NavLink to='/projects'>Projects</NavLink></li>
                        <li><NavLink to='/create-project'>Create Project</NavLink></li>
                        <li><NavLink to='/sign-in'>Sign In</NavLink></li>
                        <li><NavLink to='/sign-up'>Sign Up</NavLink></li>

                    </ul>
                </div >
            </nav >


        </div >
    )
}

export default Header;