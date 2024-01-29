import {configureStore, combineReducers} from '@reduxjs/toolkit';
import dashBoardSlice from './features/dashBoardSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  dashBoardSlice: dashBoardSlice,
});

const storage = createSensitiveStorage({
  keychainService: 'Gmart',
  sharedPreferencesName: 'Gmart',
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['dashBoardSlice'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

let persistor = persistStore(store);

export {store, persistor};
