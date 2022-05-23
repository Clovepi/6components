import React, { Component } from "react";

export default class Colorful extends Component {
    constructor() {
        super()
        this.state = {
            heading: "Paint me like one of your French Girls!",
            headingInput: "Paint me like one of your French Girls!",
            color: "$darkgreen",
        }
        this.handleColorPick = this.handleColorPick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleColorPick(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            color: this.state.colorInput,
            heading: this.state.headingInput
        })
    }

    render() {
        return(
            <div className="colors">
                <h1 style={{color: this.state.color}}>{this.state.heading}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="colorInput" type="color" onChange={this.handleColorPick} />
                    <input name="headingInput" type="text" placeholder="I'm flying, Jack!" onChange={this.handleColorPick} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}