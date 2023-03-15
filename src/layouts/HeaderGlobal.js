import React from 'react'
import { Link } from 'react-router-dom'
import argentBankLogo from '../img/argentBankLogo.png'

const HeaderGlobal = ({ pathBtn, textBtn, onClickFunc }) => {
    return (
        <nav className="main-nav">
            <Link to={"/"} className="main-nav-logo">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link onClick={onClickFunc} className="main-nav-item" to={pathBtn}>
                    <i className="fa fa-user-circle" style={{ marginTop: "5px" }}></i>
                    <div>{textBtn}</div>
                </Link>
            </div>
        </nav>
    )
}

export default HeaderGlobal