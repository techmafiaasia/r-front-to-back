
import React, { Component } from 'react'
import { Consumer } from '../context'
export default class Contact extends Component {
    state = {
        showInfo: true
    }

    onClickShow = (e) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {this.props.contact.name}
                                <i
                                    onClick={this.onClickShow}
                                    className="fas fa-sort-down"></i>
                                <i className="fas fa-times"
                                    style={{
                                        float: 'right',
                                        color: 'red'
                                    }}
                                    onClick={this.onDeleteClick.bind(this, value.contacts.id, value.dispatch)}
                                ></i>
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
                }}
            </Consumer>

        )
    }
}


