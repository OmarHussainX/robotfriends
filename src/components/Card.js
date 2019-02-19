import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const { name, email, id } = this.props;
        return (
            <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?set=set3;size=200x200`} alt='robot pic' />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;