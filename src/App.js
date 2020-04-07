import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Calculate from "./Calculator"

import { Button } from 'reactstrap'
import NumberButton from "./NumberButton"
// import FuncComponent from './Functional.js'
// import ParentComponent from "./ParentComponent"

// class Hello extends Component {
//   render() {
//     return <div>Hello {this.props.toWhat}</div>
//   }
// }
//
// const buttonStyle = {
//   margin: '10px 10px 10px 0'
// };


// class NumberButton extends Component {
//
//   render() {
//     return <Button
//         size="Lg"
//         style={buttonStyle}
//         variant="light"
//         onClick={this.props.numberClick}>{this.props.number}</Button>
//   }
// }
//
// class OperatorButton extends Component {
//   render() {
//     return <Button size="Lg" variant="light">{this.props.operator}</Button>
//   }
// }

// class NumBtn extends Component {
//   render() {
//     return (
//         <button
//             className="btn btn-default"
//             style={buttonStyle}
//             onClick={this.props.handleClick}>{this.props.number}</button>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<Hello toWhat="Finley"/>*/}
        {/*<FuncComponent/>*/}
        {/*<ParentComponent/>*/}
        <Calculate/>

      </header>
    </div>
  );
}

export default App;
