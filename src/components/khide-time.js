import React, { Component } from 'react'

export default class hideTime extends Component {
    constructor() {
        super()
        
        this.state = {
            time: new Date().toLocaleTimeString(),
            isShown: true,
            display: "block"
        }

        this.hideTime = this.hideTime.bind(this)

    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({
                time: String(new Date().toLocaleTimeString())
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this,liveTime)
    }

    hideTime () {
        if (this.state.isShown) {
            this.setState({
                time: "",
                isShown: false,
                display: "none",
            })
        }else {
            this.setState({
                time: new Date().toLocaleTimeString(),
                isShown: true,
                display: "block",
            })
        }
    }

    render() {
        return(
            <div className="father-time">
                <h1 style={{display: this.state.display}}>{this.state.time}</h1>
                    <button onClick={this.hideTime}>Father Time is No Match for You</button>
            </div>
        )
    }
}