import React, { Component } from "react";

export default class Increment extends Component {
    constructor() {
        super();

        this.state = {
            heading: 12,
            increment: 2,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleChange(event){
        this.setState({
            increment: event.target.value
        })
    }

    handleIncrease() {
        for (let i = this.state.heading; i < 32; i++) {
            this.setState({
                heading: this.state.heading + parseInt(this.state.increment)
            })
        }
    }

    handleDecrease() {
        for (let i = this.state.heading; i > 2; i--) {
            this.setState({
                heading: this.state.heading - parseInt(this.state.increment)
            })
        }
    }

    render() {
        return (
            <div className="incrementor">
                <h1 style={{ fontSize: this.state.heading }}>Size doesn't matter! {this.state.heading}px</h1>

                <div>
                    <input type="number" placeholder="Font Size" onChange={this.handleChange} />
                    <div>
                        <button onClick={this.handleIncrease}>Increase</button>
                        <button onClick={this.handleDecrease}>Decrease</button>
                    </div>
                </div>
            </div>
        )
    }



}