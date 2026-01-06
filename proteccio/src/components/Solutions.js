import React from 'react';
import '../App.css';

const Solutions = () => {
    const solutions = [
        {
            icon: 'fa-file-contract',
            title: 'Regulatory Compliance & Guidance',
            description: 'Navigate the complex landscape of GDPR, CCPA, and other global regulations with ease.'
        },
        {
            icon: 'fa-user-secret',
            title: 'Privacy Risk Assessments',
            description: 'Find and fix vulnerabilities in your data handling processes before they become issues.'
        },
        {
            icon: 'fa-database',
            title: 'Data Protection Strategies',
            description: 'We help you build robust data protection frameworks tailored to your business goals.'
        }
    ];

    return (
        <section className="solutions-section" id="solutions">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Our Method</div>
                    <h2>Comprehensive Security <span className="highlight-text">Solutions</span></h2>
                    <p>Robust innovations that power secure transactions and sources.</p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((item, index) => (
                        <div className="solution-card" key={index}>
                            <div className="card-icon">
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href="#read-more" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
