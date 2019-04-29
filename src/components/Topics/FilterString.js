import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: [''],
            userInput: '',
            filteredArray: ''
        }
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"></span>
                <input className="inputLine"></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterStringRB"></span>
            </div>
        )
    }
}