import React, { Component } from 'react'
import {Button} from "reactstrap";

class NumberButton extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.numberClick = this.numberClick.bind(this);
    }

    numberClick() {
        console.log('aaa', this);
        if (!this.props.state.operator) {
            let newValue = this.props.state.first + this.props.number;
            this.setState(state => ({
                first: newValue,
                display: newValue
            }));
        }
    }

    render() {
        return <Button
            size="Lg"
            variant="light"
            onClick={this.numberClick}>{this.props.number}</Button>
    }
}

export default NumberButton
