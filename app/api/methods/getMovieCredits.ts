import Api from '../config';
import ApiConstants from '../ApiConstants';

const getMovieCredits = (endPoint,movieId) => {
    return Api(`${endPoint}/${movieId}/${ApiConstants.GET_CREDITS}`,"language=en-US",'get');
};

export default getMovieCredits