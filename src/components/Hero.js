import React from 'react';
import '../App.css';

import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge">Data Protection Solutions</div>
                    <h1>{t('hero_title').split(' ').slice(0, -2).join(' ')} <span className="highlight-text">{t('hero_title').split(' ').slice(-2).join(' ')}</span></h1>
                    <p className="hero-description">
                        {t('hero_desc')}
                    </p>
                    <div className="hero-buttons">
                        <a href="#get-started" className="btn btn-primary">{t('get_started')}</a>
                        <a href="#learn-more" className="btn btn-outline">{t('learn_more')}</a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">99.9%</span>
                            <span className="stat-label">Uptime Guarantee</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">1000+</span>
                            <span className="stat-label">Trusted Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">24/7</span>
                            <span className="stat-label">Expert Support</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="illustration-placeholder">
                        <div className="pulse-circle"></div>
                        <i className="fas fa-server server-icon"></i>
                        <i className="fas fa-shield-alt shield-icon"></i>
                        <i className="fas fa-user-shield user-icon"></i>
                        <div className="cloud-icon"><i className="fas fa-cloud"></i></div>
                        <div className="floating-icons">
                            <i className="fas fa-lock icon-1"></i>
                            <i className="fas fa-key icon-2"></i>
                            <i className="fas fa-database icon-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
