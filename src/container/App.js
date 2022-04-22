import React, { Component } from "react";
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import { robots } from '../robots';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ robots:robots })
    }

    onSearchChange=(event) => {
        this.setState({ searchfield: event.target.value })
        }

    render() {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
            <h1 className='f-3'>Robo-friend</h1>
            <Searchbox searchchange={this.onSearchChange} />
            <Scroll>
            <Cardlist robots={filteredrobots} /> 
            </Scroll>
            </div>
        );
    }
}

export default App;