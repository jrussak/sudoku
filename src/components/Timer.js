import React, { Component } from 'react';

export default class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            running: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                running: Math.floor(
                (new Date().getTime() - this.props.start.getTime()) /1000 )
            });
        });
    }
    componentWillUnmount() {
        delete this.interval;
    }
    render(){
        const {running} = this.state;
    return <h2> Time: {running}</h2>

    }
}