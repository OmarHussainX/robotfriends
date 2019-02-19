import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div>
                <input 
                className='pa1' 
                type='search' 
                placeholder='search' 
                onChange={this.props.onSearchInput} />
            </div>
        );
    }
}

export default SearchBox;