import React from 'react';
import '../App.css';

const Tools = () => {
    return (
        <section className="tools-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Management</div>
                    <h2>Powerful Privacy <span className="highlight-text">Management Tools</span></h2>
                    <p>The smartest way to manage data privacy, security, and compliant internal workflows.</p>
                </div>

                <div className="tools-content">
                    <div className="tool-preview">
                        {/* Dashboard Mockup */}
                        <div className="dashboard-mockup">
                            <div className="dash-header">
                                <span style={{ fontWeight: '700', color: '#374151', fontSize: '0.8rem' }}>Risk Overview</span>
                            </div>
                            <div className="dash-body" style={{ display: 'flex', height: 'calc(100% - 40px)' }}>
                                <div className="dash-sidebar">
                                    <div className="sidebar-item active"></div>
                                    <div className="sidebar-item"></div>
                                    <div className="sidebar-item"></div>
                                    <div className="sidebar-item"></div>
                                </div>
                                <div className="dash-main" style={{ flex: 1, padding: '20px', marginLeft: 0 }}>
                                    <div className="dash-card">
                                        <div style={{ width: '40px', height: '40px', background: '#ECFDF5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div className="card-skeleton-text">
                                            <div className="skeleton-line" style={{ width: '80%' }}></div>
                                            <div className="skeleton-line short"></div>
                                        </div>
                                    </div>
                                    <div className="dash-card">
                                        <div style={{ width: '40px', height: '40px', background: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                                            <i className="fas fa-chart-pie"></i>
                                        </div>
                                        <div className="card-skeleton-text">
                                            <div className="skeleton-line" style={{ width: '70%' }}></div>
                                            <div className="skeleton-line short"></div>
                                        </div>
                                    </div>
                                    <div className="dash-card">
                                        <div style={{ width: '40px', height: '40px', background: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
                                            <i className="fas fa-exclamation-triangle"></i>
                                        </div>
                                        <div className="card-skeleton-text">
                                            <div className="skeleton-line" style={{ width: '90%' }}></div>
                                            <div className="skeleton-line short"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tool-info">
                        <div className="tool-badge">Risk Assessment & Management</div>
                        <h3>RoPA Management <span className="highlight-text">Made Simple</span></h3>
                        <p>
                            Records of Processing Activities (RoPA) are critical for compliance. Our tool simplifies the creation, maintenance, and auditing of your data processing records.
                        </p>
                        <ul className="check-list">
                            <li><i className="fas fa-check"></i> Automated data mapping</li>
                            <li><i className="fas fa-check"></i> Real-time compliance monitoring</li>
                            <li><i className="fas fa-check"></i> Integrated impact assessments</li>
                        </ul>
                        <a href="#learn-more" className="btn btn-primary">Explore Tools <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
