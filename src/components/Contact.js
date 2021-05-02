import React from 'react'
import PropTypes from 'prop-types'

export default function Contact(props) {
    return (
        <div className="card card-body mb-3">
            <h4>{props.name}</h4>
            <ul className="list-group">
                <li className="list-group-item">{props.email}</li>
                <li className="list-group-item">{props.phone}</li>
            </ul>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}
