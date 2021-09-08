import logo from './logo.svg';
import './App.css';
import Movies from './components/movies/Movies';
import MovieSearcher from './components/movies/MovieSearcher';

//var coleccion = new Array(5).fill(null).map((value, index) => `Item ${index + 1}`);

function Logo() {
  return (<img src={logo} className="App-logo" alt="logo" />);
}



function App() {

  return (
    <div className="bg-light">
      <div className="container">
      {/* <Logo /> */}
      <p>
        Movies sample code application
      </p>
        <MovieSearcher></MovieSearcher>
        {/* <Logo /> */}
        <Movies></Movies>
      </div>
    </div>
  );
}

export default App;
