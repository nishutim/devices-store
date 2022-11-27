import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from './reducers/auth';
import devices from './reducers/devices';

const rootReducer = combineReducers({
   auth,
   devices
});

const store = configureStore({
   reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;