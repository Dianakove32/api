import React, { Component } from 'react'
import '../App.css'
export default class Search extends Component {
    render() {
        return (
            <div>
                <input type='text' placeholder='Search character...'
                  onChange={(e)=>this.props.handleSort(e.target.value)}/>
            </div>
        )
    }
}
