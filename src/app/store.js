import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/LoginSlice';

/**
 * Configure the store with the login reducer and export it
 */
const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

export default store;