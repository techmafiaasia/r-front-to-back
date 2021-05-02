
import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        showInfo: true
    }

    onClickShow = (e) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        return (
            <div className="card card-body mb-3">
                <h4>
                    {this.props.contact.name}
                    <i
                        onClick={this.onClickShow}
                        className="fas fa-sort-down"></i>
                </h4>
                {this.state.showInfo ?
                    (<ul className="list-group">
                        <li className="list-group-item">{this.props.contact.email}</li>
                        <li className="list-group-item">{this.props.contact.phone}</li>
                    </ul>)
                    : null
                }

            </div>
        )
    }
}

