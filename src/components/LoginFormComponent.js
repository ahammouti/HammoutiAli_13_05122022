import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginPending, loginSuccess, loginFailed, setToken, setPassword, setEmail, setRememberMe } from '../app/features/LoginSlice';
import { useNavigate } from 'react-router-dom';
import { fetchUser, userLogin } from '../api/userApi.js';

/**
 * @function LoginFormComponent
 * @returns {JSX} JSX code of the component, this component is used to display the login form and handle the login process.
 */
const LoginFormComponent = () => {

    const email = useSelector((state) => state.login.email);
    const password = useSelector((state) => state.login.password);
    const rememberMe = useSelector((state) => state.login.rememberMe);
    const { isLoading, error } = useSelector((state) => state.login);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    /**
     * @function handleSubmit - handles the login process by dispatching the loginPending action, 
     * then calling the userLogin function from the userApi.js file, 
     * then dispatching the loginSuccess action, 
     * then dispatching the setToken action, 
     * then navigating to the profile page.
     * @param {Object} e, event object 
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginPending());
        try {
            const isAuth = await userLogin({ email, password });
            const userInfos = await fetchUser(); // fetch user infos to get the firstname and lastname on the profile page
            console.log(userInfos);
            dispatch(loginSuccess());
            dispatch(setToken(isAuth.body.token));
            navigate("/profile");
        } catch (error) {
            dispatch(loginFailed());
        }
    }

    const toggleRememberMe = () => {
        dispatch(setRememberMe(!rememberMe));
        localStorage.setItem('rememberMe', !rememberMe);
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="email" id="email" value={email} onChange={e => dispatch(setEmail(e.target.value))} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" value={password} onChange={e => dispatch(setPassword(e.target.value))} />
                </div>
                <div className="input-remember">
                    <input onChange={toggleRememberMe} type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
                {isLoading && <h1>Loading...</h1>}
            </form>
        </section>
    )
}

export default LoginFormComponent