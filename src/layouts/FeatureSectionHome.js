import React from 'react'
import FeatureComponent from '../components/FeatureComponent'
import iconChat from '../img/icon-chat.png'
import iconMoney from '../img/icon-money.png'
import iconSecurity from '../img/icon-security.png'

const FeatureSectionHome = () => {
    const priority = {
        description: "Need to talk to a representative? You can get in touch through our 24 / 7 chat or through a phone call in less than 5 minutes.",
        title: "You are our #1 priority",
        altImg: "chat-icon"
    }

    const money = {
        description: "The more you save with us, the higher your interest rate will be!",
        title: "More savings means higher rates",
        altImg: "money-icon"
    }

    const security = {
        description: "We use top of the line encryption to make sure your data and money is always safe.",
        title: "Security you can trust",
        altImg: "security-icon"
    }

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureComponent img={iconChat} alt={priority.altImg} title={priority.title} description={priority.description} />
            <FeatureComponent img={iconMoney} alt={money.altImg} title={money.title} description={money.description} />
            <FeatureComponent img={iconSecurity} alt={security.altImg} title={security.title} description={security.description} />
        </section>
    )
}

export default FeatureSectionHome