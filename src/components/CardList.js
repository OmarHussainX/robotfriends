import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        // destructure 'this.props' object to get the 'robots' parameter that was passed in (note: 'robots' is an Array of Objects!)
        const { robots } = this.props;
        
        // create an array of <Card /> components, with the appropriate arguments 
        // (add "key" attribute to each <Card /> child since Each child in a list should have a unique "key" prop)
        // https://reactjs.org/docs/lists-and-keys.html#keys
        const cardsArray = robots.map((robot) => {
            return (
                <Card id={robot.id} 
                name={robot.name} 
                email={robot.email} 
                key={robot.id} />);
            }
        );

        return (
            <div>
                {cardsArray}
            </div>
        );
    }
}

export default CardList;