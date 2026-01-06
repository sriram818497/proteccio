import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'te', name: 'తెలుగు (Telugu)' },
        { code: 'hi', name: 'हिन्दी (Hindi)' },
        { code: 'ur', name: 'اردو (Urdu)' },
        { code: 'ko', name: '한국어 (Korean)' },
        { code: 'zh', name: '中文 (Chinese)' },
        { code: 'de', name: 'Deutsch (German)' }
    ];

    const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button className="lang-btn" onClick={toggleDropdown}>
                <i className="fas fa-globe"></i>
                <span>Language</span>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} lang-chevron`}></i>
            </button>

            {isOpen && (
                <div className="lang-dropdown">
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            {lang.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
