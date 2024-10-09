import Api from '../config';
import ApiConstants from '../ApiConstants';

const getMovieDetails = (endPoint,movieId) => {
    return Api(`${endPoint}/${movieId}`,"language=en-US",'get');
};

export default getMovieDetails;