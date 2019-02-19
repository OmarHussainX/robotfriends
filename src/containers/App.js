import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scrollable from '../components/Scrollable';
// import { robots } from './robots';


class App extends Component {
    constructor() {
        super();
        this.state = {
            //why isn't this '{robots}'?
            robots: [],
            searchTerm: ''
        }
    }

    //This MUST be an arrow function - see:
    // https://reactjs.org/docs/handling-events.html
    onSearchInput = event => {
        //why is this needed?
        //https://medium.com/@ian.mundy/async-event-handlers-in-react-a1590ed24399
        //without it, get error, and event.target is null:
        //This synthetic event is reused for performance reasons. If you're seeing this, you're accessing the property `target` on a released/nullified synthetic event. This is set to null. If you must keep the original synthetic event around, use event.persist()
        event.persist();

        this.setState({searchTerm: event.target.value})
        console.log(event.target.value);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    render() {
        const filteredBots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        });
        console.log(filteredBots);

        if (this.state.robots.length !== 0) {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robot Friends</h1>
                    <SearchBox onSearchInput={this.onSearchInput} />
                    <Scrollable>
                        <CardList robots={filteredBots} />
                    </Scrollable>
                </div>
            );
        } else {
            return <h1 className='f1'>Loading...</h1>
        }
    }
}

export default App;