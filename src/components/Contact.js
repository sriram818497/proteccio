import React from 'react';
import '../App.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <div className="section-badge">Contact Us</div>
                    <h2>Let's Secure Your <span className="highlight-text">Digital Future</span></h2>
                    <p>
                        Ready to get started? Fill out the form below or contact us directly.
                    </p>

                    <div className="contact-methods">
                        <div className="method">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h5>Email Us</h5>
                                <p>info@proteccio.com</p>
                            </div>
                        </div>
                        <div className="method">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h5>Call Us</h5>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="method">
                            <i className="fas fa-clock"></i>
                            <div>
                                <h5>Expert Team</h5>
                                <p>Available Mon-Fri, 9am-6pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Work Email</label>
                            <input type="email" placeholder="john@company.com" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell us about your needs..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit Request</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
