import React from 'react';
import '../App.css';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Testimonials</div>
                    <h2>Trusted by <span className="highlight-text">Industry Leaders</span></h2>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="user-profile">
                            <div className="avatar">S</div>
                            <div className="user-info">
                                <h4>Sarah Jenkins</h4>
                                <span>Director of Compliance, TechFlow</span>
                            </div>
                        </div>
                        <p>"Proteccio has transformed how we handle data privacy. Their tools are intuitive and their guidance is invaluable."</p>
                        <div className="rating">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="user-profile">
                            <div className="avatar">M</div>
                            <div className="user-info">
                                <h4>Mark Stevens</h4>
                                <span>CISO, Global Finance</span>
                            </div>
                        </div>
                        <p>"The best investment we've made for our security infrastructure. Highly recommended for any enterprise."</p>
                        <div className="rating">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
