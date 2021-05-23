import {combineReducers} from 'redux';

//Import All Reducers

import {appReducer} from './Reducer';

export default combineReducers({

  app: appReducer,
});
