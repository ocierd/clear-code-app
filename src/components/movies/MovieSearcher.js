import React from "react";
import MoviesService from "../../core/services/MoviesService";




async function getMovies(criteria, callBack) {
    var movies = await MoviesService.getMovieByCriteriaAsync(criteria);
    if (typeof callBack === 'function') {
        callBack(movies);
    } else {
        console.log('no es función');
        //setMoviesMatchet(movies);
    }

}

function MovieSearcher() {
    var [moviesMatched, setMoviesMatchet] = React.useState([]);
    React.useEffect(() => getMovies('', setMoviesMatchet), []);


    function printText(evt) {
        var criteria = evt.target.value;

        setTimeout(() => {
            if (criteria == evt.target.value) {
                getMovies(criteria, setMoviesMatchet);
            }
            else {
                console.log(`Ya es diferente (${criteria}:${evt.target.value})`);
            }
        }, 500);

    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h5>Search card</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <input className="form-control" placeholder="Type for search" onKeyUp={evt => printText(evt)}></input>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            {
                                moviesMatched ?
                                    (moviesMatched.map(movie => (
                                        <div key={movie.movieId} className="col-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{movie.title}</h5>
                                                    <p className="card-text">
                                                        Release: {(new Date(movie.release)).getFullYear()}
                                                        <br/>
                                                        Runtime:{movie.runtime} minutes
                                                    </p>
                                                    <a className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>

                                    )))
                                    : (<div>Loading...</div>)

                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default MovieSearcher;