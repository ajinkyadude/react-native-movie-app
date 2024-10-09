import Api from '../config';
import ApiConstants from '../ApiConstants';

const getSimilarMovies = (endPoint,movieId,endPoint2) => {
    return Api(`${endPoint}/${movieId}/${endPoint2}`,"language=en-US",'get');
};

export default getSimilarMovies;