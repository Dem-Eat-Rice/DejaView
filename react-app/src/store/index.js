import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session.js';
import usersReducer from './users.js';
import dreamsReducer from './dreams.js';
import fragmentsReducer from './fragments.js';

const rootReducer = combineReducers({
	session: sessionReducer,
    users: usersReducer,
	dreams: dreamsReducer,
	fragments: fragmentsReducer
});

let enhancer;
	
if (process.env.NODE_ENV === 'production') {   
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require('redux-logger').default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
