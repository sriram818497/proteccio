import React from 'react';
import '../App.css';

const Features = () => {
    return (
        <section className="features-section">
            <div className="container features-container">
                <div className="features-text">
                    <div className="section-badge">Features</div>
                    <h2>Proteccio is a trusted leader in data protection and privacy</h2>
                    <p>
                        Offering comprehensive solutions that help businesses comply with global privacy regulations, manage risks, and ensure data security. We make the complex simple, so you can focus on your business.
                    </p>
                    <p>
                        With innovative tools designed to mitigate risk and enable secure data handling, we empower you to protect what matters most.
                    </p>
                </div>
                <div className="features-graphic">
                    {/* Abstract representation of the circular graphic in the design */}
                    <div className="circle-graphic">
                        <div className="circle-outer"></div>
                        <div className="icon-item item-gdpr">GDPR</div>
                        <div className="icon-item item-lock"><i className="fas fa-lock"></i></div>
                        <div className="icon-item item-ai">AI</div>
                        <div className="center-shield"><i className="fas fa-shield-alt"></i></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
