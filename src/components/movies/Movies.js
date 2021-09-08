import MoviesService from '../../core/services/MoviesService';
import React from 'react';
import Movie from './Movie';

function Movies() {
    var [movies, setMovies] = React.useState([]);
    React.useEffect(() => {
        async function getMovies() {
            var Movies = await MoviesService.getMoviesAsync();
            setMovies(Movies);
        };
        getMovies();
    }, []);


    return (
        <div className="card my-3">
            <div className="card-header">
                <h5> Full movies list</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        movies ? (movies.map(movie => (
                            <Movie key={movie.movieId} movie={movie}></Movie>
                        ))) : (<div>Loading....</div>)
                    }
                </div>
            </div>

        </div>

    );
}



export default Movies;