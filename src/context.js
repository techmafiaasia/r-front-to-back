import React, { Component } from 'react'

const Context = React.createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
            break
        default:
            return state
    }
}
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }

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
