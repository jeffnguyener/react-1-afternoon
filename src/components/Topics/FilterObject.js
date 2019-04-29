import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            peoples: [
                {
                    name: 'John Snow',
                    title: 'King',
                    hairColor: 'brown'
                },
                {
                    name: 'Margie Simpson',
                    title: 'Homemaker'
                },
                {
                    name: 'Fred Flintone',
                    title: 'Father',
                    hairColor: 'black'
                }
            ],

            userInput: '',
            filteredPeople: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterPeoples(prop) {
        let peoples = this.state.peoples;
        let filteredPeoples = [],
        for (let i = 0; i < peoples.length; i++) {
            if (peoples[i].hasOwnProperty(prop)) {
                filteredPeoples.push(peoples[i]);
            }
        }
        this.setState({ filterPeoples: filteredPeoples });

    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.peoples, null, 10)} </span>
                <input className="inputLine" onChange={() => { this.handleChange(e.target.value) }}></input>
                <button className="confirmationButton" onClick={() => this.filterPeoples(this.state.userInput)}></button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredPeoples, null, 10)} </span>
            </div>
        )
    }
}