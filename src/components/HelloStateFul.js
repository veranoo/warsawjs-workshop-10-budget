import React, { Component } from 'react';

export class HelloStateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hello world'
        }
    }
    render() {
        return(<div>HelloStateful { this.state.name }</div>)
    }
}
