import React from 'react';
import '../App.css';

const Process = () => {
    const steps = [
        { icon: 'fa-comments', title: 'Consultation', desc: 'We assess your current status and needs.' },
        { icon: 'fa-search', title: 'Assessment', desc: 'Deep dive into your data flows and risks.' },
        { icon: 'fa-tools', title: 'Implementation', desc: 'Deploying solutions to fix gaps.' },
        { icon: 'fa-headset', title: 'Support', desc: 'Ongoing monitoring and assistance.' }
    ];

    return (
        <section className="process-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">How It Works</div>
                    <h2>How We Make It <span className="highlight-text">Happen</span></h2>
                </div>

                <div className="process-grid">
                    {steps.map((step, i) => (
                        <div className="process-card" key={i}>
                            <div className="process-icon">
                                <i className={`fas ${step.icon}`}></i>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
