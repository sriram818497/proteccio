import React from 'react';
import '../App.css';

const Industries = () => {
    const industries = [
        { icon: 'fa-heartbeat', name: 'Healthcare' },
        { icon: 'fa-university', name: 'Financial Services' },
        { icon: 'fa-laptop-code', name: 'Technology' },
        { icon: 'fa-industry', name: 'Manufacturing' },
        { icon: 'fa-bolt', name: 'Energy' },
        { icon: 'fa-shopping-cart', name: 'E-commerce' }
    ];

    return (
        <section className="industries-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Industries</div>
                    <h2>Trusted Across <span className="highlight-text">Industries</span></h2>
                    <p>Delivering peace of mind for businesses in every sector.</p>
                </div>

                <div className="industries-grid">
                    {industries.map((ind, i) => (
                        <div className="industry-card" key={i}>
                            <i className={`fas ${ind.icon}`}></i>
                            <span>{ind.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
