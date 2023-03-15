import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/LoginSlice';

const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

export default store;