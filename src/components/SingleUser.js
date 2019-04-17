import React, { Component } from 'react'

export default class extends Component {
    render() {
        const user = this.props.data
        return (
            <li>
              ID:  {user.id}, Account: {user.accountname}, Password: {user.password}
            </li>
        )
    }
}