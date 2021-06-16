import { combineReducers, createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers/movies-reducer';

const reducers = combineReducers({
    movies: moviesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(compose(applyMiddleware(thunk))));

export default store;