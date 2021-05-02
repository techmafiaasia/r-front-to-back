import React, { Component } from 'react'
import Contact from './Contact'
export default class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'john doe',
                email: 'jdoe@gmail.com',
                phone: '55-555-5555'
            },
            {
                id: 2,
                name: 'jane doe',
                email: 'jdoe@gmail.com',
                phone: '55-555-5555'
            },
            {
                id: 3,
                name: 'henry doe',
                email: 'jdoe@gmail.com',
                phone: '55-555-5555'
            },
        ]

    }

    render() {
        const { contacts } = this.state
        return (
            <div>
                {contacts.map((item, i) => {
                    return (
                        <Contact key={i} contact={item} />
                    )

                })}
            </div>
        )
    }
}
