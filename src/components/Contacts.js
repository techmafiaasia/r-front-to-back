import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'
export default class Contacts extends Component {


    deleteContact = (id) => {
        const { contacts } = this.state
        const newContacts = contacts.filter(contact =>
            contact.id !== id)
        this.setState({
            contacts: newContacts
        })
    }
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div>
                            {value.contacts.map((item, i) => {
                                return (
                                    <Contact key={i} contact={item} deleteClickHandler={this.deleteContact.bind(this, item.id)} />
                                )

                            })}
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}
