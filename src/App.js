import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import Filter from './Filter/Filter'
import BookList from './BookList/BookList'

class App extends React.Component {
  state = {
    bookResults:{},
    params: {
      q: '', 
      printType:'all',
    }
    }

  formatQueryParams(params){
    const queryItems = Object.keys(params).map(key =>`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
  } 
  
  handleSearchSubmit = event => {
    event.preventDefault();

    const key = '&key=AIzaSyDLIE8EI-w0r7Zo_O-eBrEyjpZQGIle03A'
    const url = 'https://www.googleapis.com/books/v1/volumes'
    const queryString =this.formatQueryParams(this.state.params)  
    const formattedUrl = url + '?' + queryString + key

    //console.log(formattedUrl)

    fetch(formattedUrl)
      .then(response => {
        if(!response.ok){
          throw new Error ('something went wrong with the search')
        } return response
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          bookResults: data 
        })
      });
  }

  //https://www.googleapis.com/books/v1/volumes?q=dog&key=AIzaSyDLIE8EI-w0r7Zo_O-eBrEyjpZQGIle03A
  
  
  // componentDidMount() {
  //   fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&printType=magazines&key=AIzaSyDLIE8EI-w0r7Zo_O-eBrEyjpZQGIle03A')
  //     .then(response => response.json())
  //     .then(data => {
  //       //console.log(data);
  //       this.setState({
  //         bookResults: data 
  //       })
  //     });
  // }  

  handlePrintType = (event) => {
    if (event) {
      this.setState({
        params:
          {printType:event}
      })

      console.log(this.state.params.printType)
      //there seems to be a wierd delay in the change logged (same for the input)
    }

  }

  setTerm(e){
    this.setState({
      params: 
        {q: e.target.value}
    })
  }

  render() { 
    //console.log(this)
    const {bookResults} = this.state

    return (
      <main className='App'>
        <header>
          <h1>Book Search</h1>
        </header>
        <SearchBar onSubmit={(e) => this.handleSearchSubmit(e)} onChange={(e) => this.setTerm(e)} value={this.state.params.q}/>
        <Filter handlePrintType ={this.handlePrintType} />
        <BookList results={bookResults}/>
      </main>
      );
  }
}
 
export default App;

