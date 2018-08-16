import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

/*2018-08-16자 참고*/ 

state ={
}

componentDidMount(){
  setTimeout(() => {
    this.setState({
      movies: [
        {
          id: 1,
          title: 'matrix',
          poster:'https://temporarytattoos.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/n/u/number-1-temporary-tattoo_5035.jpg',
        },
        {
          id: 2,
          title:'Full Metal Jacket',
          poster:'https://vignette.wikia.nocookie.net/logopedia/images/3/39/2-23.jpg/revision/latest?cb=20170506171339'
        },
        {
          id: 3,
          title:'Odboy',
          poster:'https://vignette.wikia.nocookie.net/opartshunter/images/7/79/3.jpg/revision/latest?cb=20130603053056'
        },
        {
          id: 4,
          title:'Star Wras',
          poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Channel_4_logo_2015.svg/1200px-Channel_4_logo_2015.svg.png'
        },
        {
          id: 5,
          title:'Transpotting',
          poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Channel_4_logo_2015.svg/1200px-Channel_4_logo_2015.svg.png'
        }
      ]
    })
  }, 5000)
}

_renderMovies= () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
  })
  return movies
}

  render() {  //state를 변경하면 새로운 state와 함께 render이 다시 작동한다.
    console.log('did render')
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
