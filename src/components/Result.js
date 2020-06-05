import React, { Component } from 'react';

export default class Result extends Component{
    render() {
        const {sudoku} = this.props;
        console.log(sudoku.endTime)
        console.log(sudoku.startTime)
        const running = Math.floor((sudoku.endTime.getTime() - sudoku.startTime.getTime()) / 1000 );

        return <h2>Sudoku solved in {running} seconds.</h2>

    }
}