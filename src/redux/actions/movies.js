import {GET_SEARCH_RESULT, SET_CURRENT_PAGE, CHANGE_VALUE_INPUT} from './types';
import {moviesAPI} from '../../api/api';

export const getSearchResultsAC = (searchResult) => {
    return {
        type: GET_SEARCH_RESULT,
        payload: searchResult
    }
}

export const setCurrentPageAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

export const changeValueInputAC = (text) => {
    return {
        type: CHANGE_VALUE_INPUT,
        payload: text
    }
}



//THUNK CREATORS

export const getMoviesTC = (movieRequest, currentPage) => (dispatch) => {
    moviesAPI.getMovies(movieRequest, currentPage)
        .then(resp => {
            if(resp.Response === "True") {
                dispatch(getSearchResultsAC(resp));
            }
        })
}