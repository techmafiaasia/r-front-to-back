import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
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
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
