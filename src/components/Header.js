import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container" >
                <a href="/" className="navbar-brand">{props.branding}</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" >
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>


        </nav>
    )
}



Header.defaultProps = {
    branding: "My App"
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}