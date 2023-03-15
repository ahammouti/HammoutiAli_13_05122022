import React from 'react'
import { Link } from 'react-router-dom'
import argentBankLogo from '../img/argentBankLogo.png'

const HeaderHome = () => {
    return (
        <nav className="main-nav">
            <Link to={"/"} className="main-nav-logo">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to={"/login"}>
                    <i className="fa fa-user-circle" style={{ marginTop: "5px" }}></i>
                    <div>Sign In</div>
                </Link>
            </div>
        </nav>
    )
}

export default HeaderHome