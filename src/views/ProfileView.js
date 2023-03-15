import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginPending, loginSuccess, setRememberMe, setToken, setStateToNull, setFirstname, setLastname, setEditName } from '../app/features/LoginSlice'
import PopupWelcome from '../components/PopupWelcome';
import HeaderGlobal from '../layouts/HeaderGlobal'

export const ProfileView = () => {

    const token = useSelector((state) => state.login.token)
    const firstName = useSelector((state) => state.login.firstname)
    const lastName = useSelector((state) => state.login.lastname)
    const rememberMe = useSelector((state) => state.login.rememberMe)
    const editNameBtn = useSelector((state) => state.login.editName)
    let navigate = useNavigate()
    let dispatch = useDispatch()

    useEffect(() => {
        const rememberMeFromLocalStrg = localStorage.getItem("rememberMe");
        const tokenFromLocalStrg = sessionStorage.getItem("token");
        const firstNameFromLocalStrg = localStorage.getItem("firstName");
        const lastNameFromLocalStrg = localStorage.getItem("lastName");
        const logOut = () => {
            sessionStorage.clear();
            localStorage.clear();
            navigate("/");
        }

        dispatch(setFirstname(firstNameFromLocalStrg));
        dispatch(setLastname(lastNameFromLocalStrg));

        if (tokenFromLocalStrg && rememberMeFromLocalStrg) {
            dispatch(loginPending());
            dispatch(loginSuccess({ isAuth: true }));
            dispatch(setToken(tokenFromLocalStrg));
            dispatch(setFirstname(firstNameFromLocalStrg));
            dispatch(setLastname(lastNameFromLocalStrg));
            dispatch(setRememberMe(true));
        }
        if (!token && !rememberMeFromLocalStrg) return logOut(); // if token is null and rememberMe is false, log out user and redirect to login page
    }, [rememberMe, token, dispatch, navigate]);

    const handleLogOut = () => {
        dispatch(setStateToNull());
        localStorage.clear();
        sessionStorage.clear();
    }

    const handleChangeName = (e) => {
        e.preventDefault();
        dispatch(setEditName(!editNameBtn));
    }

    return (
        <div>
            <HeaderGlobal onClickFunc={handleLogOut} pathBtn={"/"} textBtn={`${firstName} ${lastName} | Sign Out`} />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />
                        {
                            editNameBtn ? <PopupWelcome /> : `${firstName} ${lastName}!`
                        }
                    </h1>
                    {!editNameBtn &&
                        <button onClick={handleChangeName} className="edit-button">Edit Name</button>
                    }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </div>
    )
}