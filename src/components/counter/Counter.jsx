import React, { Component } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="App">
                <h3>Simple Calculator Using React:</h3>
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={15} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span><br />
                <button onClick={this.reset} className="reset">Reset</button>
            </div>
        );
    }

    increment(by) {
        this.setState(
            (preVal) => { return { counter: preVal.counter + by } }
        );
    }

    decrement(by) {
        this.setState(
            (preVal) => { return { counter: preVal.counter - by } }
        );
    }

    reset() {
        this.setState({ counter: 0 });
    }

}

export default Counter;