import React from 'react'
import FeatureSectionHome from '../layouts/FeatureSectionHome'
import Footer from '../layouts/Footer'
import HeaderGlobal from '../layouts/HeaderGlobal'
import HeroHome from '../layouts/HeroHome'


const HomeView = () => {
    return (
        <>
            <HeaderGlobal func={null} pathBtn={"/login"} textBtn={"Sign In"} />
            <main>
                <HeroHome />
                <FeatureSectionHome />
            </main>
            <Footer />
        </>
    )
}

export default HomeView