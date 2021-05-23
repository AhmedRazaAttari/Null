import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist'
// import middlewares from './Middleware';

import middlewares from './middleware'
import reducers from './Reducer'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, reducers);

const store = createStore(pReducer, applyMiddleware(...middlewares));

const persister = persistStore(store);

export {store, persister};
