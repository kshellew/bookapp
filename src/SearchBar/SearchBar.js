import React from 'react';

class SearchBar extends React.Component {
    state = {
        input:''
      }



    render() { 
        return (
            <form className='search-form' onSubmit={this.props.onSubmit}>
                <input 
                    type='text' 
                    placeholder='search for a book' onChange={this.props.onChange} value={this.props.value} required></input>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}
 
export default SearchBar;



