import XhrRequest from '../XhrRequest';
import ServerRequestData from './ServiceBase';

var moviesApiUrl = `${ServerRequestData.apiUrl}/Movie`;

const moviesRequestData = {
    getMovies: {
        url: `${moviesApiUrl}`
    },
    getMovieByCriteria: {
        url: `${moviesApiUrl}/GetByCriteria?criteria=`
    }
};



/**
 * Request the movies data
 * @returns Promise that resolve with movies
 */
const getMoviesAsync = async () => await XhrRequest.sendRequest(moviesRequestData.getMovies.url);

/**
 * Request the movies that match with the criteria provided
 * @param {string} criteria Criteria to search movie
 * @returns Promise that resolve with the movie's criteria matched  
 */
const getMovieByCriteriaAsync = async (criteria) => await XhrRequest.sendRequest(moviesRequestData.getMovieByCriteria.url + criteria);

var MoviesService = {
    getMoviesAsync,
    getMovieByCriteriaAsync
};

export default MoviesService;