import React from 'react'
import LoginFormComponent from '../components/LoginFormComponent'
import Footer from '../layouts/Footer'
import HeaderGlobal from '../layouts/HeaderGlobal'

const LoginView = () => {
    return (
        <>
            <HeaderGlobal func={null} pathBtn={"/login"} textBtn={"Sign In"} />
            <main className="main bg-dark">
                <LoginFormComponent />
            </main>
            <Footer />
        </>
    )
}

export default LoginView