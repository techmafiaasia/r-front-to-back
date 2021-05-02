import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'
export default class Contacts extends Component {



    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div>
                            {value.contacts.map((item, i) => {
                                return (
                                    <Contact key={i} contact={item} />
                                )

                            })}
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}
