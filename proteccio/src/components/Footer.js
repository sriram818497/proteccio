import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col brand-col">
                    <Link to="/" className="brand-logo-footer">
                        <div className="logo-icon-outline">P</div>
                        <span className="logo-text-footer">Proteccio</span>
                    </Link>
                    <p className="footer-desc">
                        Protecting your digital assets with cutting-edge technology and expertise. We ensure businesses comply with global privacy regulations while maintaining operational efficiency.
                    </p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-threads"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Free Tools</h4>
                    <ul>
                        <li><a href="#">Consent Form Generator</a></li>
                        <li><a href="#">Cookie Scanner</a></li>
                        <li><a href="#">CPRA Compliance Assessment</a></li>
                        <li><a href="#">DPDPA Compliance Assessment</a></li>
                        <li><a href="#">EU AI Gap Assessment</a></li>
                        <li><a href="#">GDPR Compliance Assessment</a></li>
                        <li><a href="#">GLBA Compliance Assessment</a></li>
                        <li><a href="#">HIPAA Compliance Assessment</a></li>
                        <li><a href="#">ISO 27001:2022 Gap Assessment</a></li>
                        <li><a href="#">ISO 27701:2019 Gap Assessment</a></li>
                        <li><a href="#">Legitimate Interest Assessment</a></li>
                        <li><a href="#">LGPD Compliance Assessment</a></li>
                        <li><a href="#">Transfer Impact Assessment</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#">RoPA Management Application (RMA)</a></li>
                        <li><a href="#">Consent Management Application (CMA)</a></li>
                        <li><a href="#">Privacy by Design (PbD)</a></li>
                        <li><a href="#">DPIA Management (DM)</a></li>
                        <li><a href="#">TPRM Management (TM)</a></li>
                        <li><a href="#">Datavory Application</a></li>
                        <li><a href="#">Data Mapping</a></li>
                        <li><a href="#">DSR Management</a></li>
                        <li><a href="#">Data Breach Management</a></li>
                        <li><a href="#">ISO ISMS 27001 Assessments (ISO Management)</a></li>
                        <li><a href="#">ISO PIMS 27701 Assessments (ISO Management)</a></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4>Contact</h4>
                    <p><i className="fas fa-phone-alt"></i> +91 89858 72536</p>
                    <p><i className="fas fa-envelope"></i> contact@protecciodata.com</p>
                    <p className="address-block">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>
                            1-1-17/C,<br />
                            <span className="text-green">Jawahar Nagar</span>, Near RTC X road<br />
                            <span className="text-green">Hyderabad, Telangana, India</span>
                        </span>
                    </p>

                    <div className="map-container">
                        <iframe
                            title="Proteccio Location"
                            src="https://maps.google.com/maps?q=1-1-17/C,+Jawahar+Nagar,+Near+RTC+X+road,+Hyderabad,+Telangana,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <div className="footer-links-row">
                    <a href="#">Rights Management</a>
                    <a href="#">Manage Your Communication</a>
                    <a href="#">Cookie Preferences</a>
                </div>
                <div className="copyright-text">
                    &copy; 2025 Proteccio Data. All rights reserved.
                </div>
                <div className="footer-links-row">
                    <a href="#">Privacy Notice</a>
                    <a href="#">Cookie Notice</a>
                    <a href="#">Compliance Information</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
