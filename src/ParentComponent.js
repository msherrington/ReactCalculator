import React, { Component } from 'react'
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component {
    render() {
        return (
            <h1>
                Je suis le parent.
                <ChildComponent sequence="1st"/>
                <ChildComponent sequence="2nd"/>
                <ChildComponent sequence="3rd"/>
                <ChildComponent sequence="4th "/>
            </h1>
        )
    }
}

export default ParentComponent
