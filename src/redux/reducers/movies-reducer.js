import {GET_SEARCH_RESULT, SET_CURRENT_PAGE, CHANGE_VALUE_INPUT} from '../actions/types';

const initialState = {
    movies: [],
    userRequest: '',
    totalCount: 0,
    currentPage: 1, 
    pageSize: 10, 
    portionSize: 10
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULT: {
            if(action.payload.Search && action.payload.Search.length > 0) {
                return {
                    ...state,
                    movies: [...action.payload.Search], 
                    totalCount: action.payload.totalResults,
                }
            }
            return {
                ...state
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        // case CHANGE_VALUE_INPUT: {
        //     return {
        //         ...state,
        //         userRequest: action.payload
        //     }
        // }

        default: return state
    }
}

export default moviesReducer;