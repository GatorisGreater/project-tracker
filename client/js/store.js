import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/reducers';

const store = createStore(reducers.projectReducer, applyMiddleware(thunk));

export default store;

// export default createStore(reducers.goalReducer, applyMiddleware(thunk));