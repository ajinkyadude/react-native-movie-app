import Api from '../config';
import ApiConstants from '../ApiConstants';

const getUpcomingMovies = (endPoint) => {
    return Api(endPoint,`language=en-US`,'get');
};

export default getUpcomingMovies;