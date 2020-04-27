import React, { Component } from 'react'
import {Button} from "reactstrap";

class NumberButton extends Component {
    render() {
        return <Button
            size="Lg"
            variant="light">{this.props.number}</Button>
    }
}

export default NumberButton
