import React from 'react'

/**
 * 
 * @param {Object} props, destructured object containing the props of the component 
 * @return {JSX} JSX code of the component, this component is used to display the feature section of the home page.
 */
const FeatureComponent = ({ img, alt, title, description }) => {
    return (
        <div className="feature-item">
            <img src={img} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default FeatureComponent