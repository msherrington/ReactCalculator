import React, { Component } from 'react'
import {Button} from "reactstrap"

function getValue(number, inputString) {
    return parseInt(number.toString() + inputString);
}

class Calculate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: 0,
            operator: null,
            first: 0,
            second: 0,
            calculated: false
        };

        // This binding is necessary to make `this` work in the callback
        this.numberClick = this.numberClick.bind(this);
        this.operatorClick = this.operatorClick.bind(this);
        this.clearClick = this.clearClick.bind(this);
        this.equalsClick = this.equalsClick.bind(this);
    }

    numberClick(event) {
        let inputString = event.target.innerText;
        let value = this.state.first;
        let newValue;
        if (!this.state.operator) {
            if (this.state.calculated) {
                value = 0;
            } else if (this.state.first.toString().length > 8) {
                inputString = "";
            }
            newValue = getValue(value, inputString);
            this.setState(state => ({
                first: newValue,
                display: newValue,
                calculated: false
            }));
        } else {
            value = this.state.second;
            if (value.toString().length < 8) {
                newValue = getValue(value, inputString);
                this.setState(state => ({
                    second: newValue,
                    display: newValue
                }));
            }
        }
    }

    operatorClick(event) {
        let newOperator = event.target.innerText;
        this.setState(state => ({
            operator: newOperator,
            display: newOperator
        }));
    }

    clearClick(e) {
        this.setState(state => ({
            display: 0,
            operator: null,
            first: 0,
            second: 0
        }));
    }

    equalsClick(e) {
        let total;
        switch (this.state.operator) {
            case "+":
                total = this.state.first + this.state.second;
                break;
            case "-":
                total = this.state.first - this.state.second;
                break;
            case "*":
                total = this.state.first * this.state.second;
                break;
            case "/":
                total = this.state.first / this.state.second;
                break;
            default:
                total = this.state.first;
                break;
        }
        if (total % 1 !== 0 && total.toString().length > 8) {
            total = total.toPrecision(8);
        }
        this.setState(state => ({
            display: total,
            operator: null,
            first: total,
            second: 0,
            calculated: true
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.display}</h1>
                <div>
                    <Button onClick={e => this.numberClick(e)}>1</Button>
                    <Button onClick={e => this.numberClick(e)}>2</Button>
                    <Button onClick={e => this.numberClick(e)}>3</Button>
                    <Button onClick={e => this.operatorClick(e)}>+</Button>
                </div>
                <div>
                    <Button onClick={e => this.numberClick(e)}>4</Button>
                    <Button onClick={e => this.numberClick(e)}>5</Button>
                    <Button onClick={e => this.numberClick(e)}>6</Button>
                    <Button onClick={e => this.operatorClick(e)}>-</Button>
                </div>
                <div>
                    <Button onClick={e => this.numberClick(e)}>7</Button>
                    <Button onClick={e => this.numberClick(e)}>8</Button>
                    <Button onClick={e => this.numberClick(e)}>9</Button>
                    <Button onClick={e => this.operatorClick(e)}>*</Button>
                </div>
                <div>
                    <Button onClick={e => this.numberClick(e)}>0</Button>
                    <Button onClick={e => this.clearClick(e)}>CLR</Button>
                    <Button onClick={e => this.equalsClick(e)}>=</Button>
                    <Button onClick={e => this.operatorClick(e)}>/</Button>
                </div>
            </div>
        )
    }
}

export default Calculate
