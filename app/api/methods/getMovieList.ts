import Api from '../config';
import ApiConstants from '../ApiConstants';

const baseParams = `language=en-US&sort_by=popularity.desc`

const getMovieList = (endPoint,genreId) => {
    return Api(endPoint,`${baseParams}&with_genres=${genreId}`,'get');
};

export default getMovieList;