import React, { Component } from 'react'
import ReactLoading from "react-loading";

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            done: undefined
        }
    }
    render() {
        return (
            <div className="row mx-auto">
                {!this.state.done ? (
                    <ReactLoading type={"spokes"} color={"orange"} />
                ) : (
                        <h1>hello world</h1>
                    )}
            </div>
        )
    }
}
