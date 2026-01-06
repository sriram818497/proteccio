import React from 'react';
import '../App.css';

const DemoPage = () => {
    return (
        <div className="demo-page">
            <div className="demo-container">
                <div className="demo-card">
                    <div className="demo-header">
                        <h1>Experience Privacy Compliance Made Simple</h1>
                        <p>See how our automated solutions can streamline your privacy compliance workflow and reduce risks</p>
                    </div>

                    <form className="demo-form">
                        <div className="form-row">
                            <div className="form-group-custom">
                                <label>First Name *</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="" required />
                                </div>
                            </div>
                            <div className="form-group-custom">
                                <label>Last Name *</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="" required />
                                </div>
                            </div>
                        </div>

                        <div className="form-group-custom">
                            <label>Business Email *</label>
                            <div className="input-with-icon">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="" required />
                            </div>
                        </div>

                        <div className="form-group-custom">
                            <label>Company Name *</label>
                            <div className="input-with-icon">
                                <i className="fas fa-building"></i>
                                <input type="text" placeholder="" required />
                            </div>
                        </div>

                        <div className="form-group-custom">
                            <label>Phone Number *</label>
                            <div className="input-with-icon">
                                <i className="fas fa-phone-alt"></i>
                                <input type="tel" placeholder="" required />
                            </div>
                        </div>

                        <div className="form-group-custom">
                            <label>How can we help?</label>
                            <textarea
                                placeholder="Tell us about your privacy compliance needs and challenges..."
                                className="demo-textarea"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-lg">Get Your Personalized Demo</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;
