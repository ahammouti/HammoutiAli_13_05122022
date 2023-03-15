import { createSlice } from '@reduxjs/toolkit';

// Initial state for the login slice
const initialState = {
    token: null,
    isLoggingIn: false,
    isLoading: false,
    isAuth: false,
    error: null,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    rememberMe: false,
    editName: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

        setStateToNull: (state) => {
            state.token = null;
            state.isLoggingIn = false;
            state.isLoading = false;
            state.isAuth = false;
            state.error = null;
            state.firstname = '';
            state.lastname = '';
            state.email = '';
            state.password = '';
            state.rememberMe = false;
            state.editName = false;
        },

        loginPending: (state) => {
            state.isLoading = true
        },

        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
        },

        loginFailed: (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = action.payload;
        },

        logOut: (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
        },

        setToken: (state, action) => {
            state.token = action.payload;
        },

        setFirstname: (state, action) => {
            state.firstname = action.payload;
        },

        setLastname: (state, action) => {
            state.lastname = action.payload;
        },

        setEmail: (state, action) => {
            state.email = action.payload;
        },

        setPassword: (state, action) => {
            state.password = action.payload;
        },

        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
        },

        setEditName: (state, action) => {
            state.editName = action.payload;
        }
    },
});

// destructuring the actions and reducer from the slice to export them
const { actions, reducer } = loginSlice;

// exporting the actions to be used in the components and the reducer to be used in the store
export const { setStateToNull, loginPending, loginSuccess, loginFailed, logOut, setToken, setIsLoggingIn, setError, setFirstname, setLastname, setEmail, setPassword, setRememberMe, setEditName } = actions;
export default reducer;