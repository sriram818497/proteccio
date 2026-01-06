import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">P</div>
                    <span className="logo-text">Proteccio</span>
                </Link>

                <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/">{t('nav_solutions')}</Link>
                    <Link to="/">{t('nav_products')}</Link>
                    <Link to="/">{t('nav_resources')} <i className="fas fa-chevron-down" style={{ fontSize: '0.7em' }}></i></Link>
                    <Link to="/">{t('nav_about')}</Link>
                    <Link to="/">{t('nav_contact')}</Link>
                </div>

                <div className="navbar-actions">
                    <LanguageSelector />
                    <Link to="/login" className="btn btn-outline-rounded">{t('signin')}</Link>
                    <Link to="/demo" className="btn btn-primary">{t('book_demo')}</Link>
                </div>

                <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
