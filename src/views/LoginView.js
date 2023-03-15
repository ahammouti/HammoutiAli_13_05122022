import React from 'react'
import LoginFormComponent from '../components/LoginFormComponent'
import Footer from '../layouts/Footer'
import HeaderHome from '../layouts/HeaderHome'

const LoginView = () => {
    return (
        <>
            <HeaderHome />
            <main className="main bg-dark">
                <LoginFormComponent />
            </main>
            <Footer />
        </>
    )
}

export default LoginView