import React, { Component } from 'react'
import {Button} from "reactstrap";

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
        // this.numberClick = this.numberClick.bind(this);
        // this.operatorClick = this.operatorClick.bind(this);
        // this.clearClick = this.clearClick.bind(this);
        // this.equalsClick = this.equalsClick.bind(this);
    }

    numberClick = ({ target: { innerText } }) => {
        let { first, second, operator, calculated } = this.state;
        let newValue;
        if (!operator) {
            if (calculated) {
                newValue = getValue(0, innerText);
            } else {
                innerText = first.toString().length > 8 ? "" : innerText;
                newValue = getValue(first, innerText);
            }
            this.setState({
                first: newValue,
                display: newValue,
                calculated: false
            });
        } else {
            if (second.toString().length < 8) {
                newValue = getValue(second, innerText);
                this.setState({
                    second: newValue,
                    display: newValue
                });
            }
        }
    };

    operatorClick = ({ target: { innerText } }) => {
        this.setState({
            operator: innerText,
            display: innerText
        });
    };

    clearClick = () => {
        this.setState({
            display: 0,
            operator: null,
            first: 0,
            second: 0
        });
    };

    equalsClick = () => {
        let { first, second, operator } = this.state;
        let total;
        switch (operator) {
            case "+":
                total = first + second;
                break;
            case "-":
                total = first - second;
                break;
            case "*":
                total = first * second;
                break;
            case "/":
                total = first / second;
                break;
            default:
                total = first;
                break;
        }
        if (total % 1 !== 0 && total.toString().length > 8) {
            total = total.toPrecision(8);
        }
        this.setState({
            display: total,
            operator: null,
            first: total,
            second: 0,
            calculated: true
        });
    };

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
                    <Button onClick={this.clearClick}>CLR</Button>
                    <Button onClick={this.equalsClick}>=</Button>
                    <Button onClick={e => this.operatorClick(e)}>/</Button>
                </div>
            </div>
        )
    }
}

export default Calculate
