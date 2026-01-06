import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
        console.log('Login attempt:', email);
    };

    return (
        <div className="login-page">
            <div className="login-container-centered">
                <div className="login-card">
                    <div className="login-header">
                        <h1>Welcome back</h1>
                        <p className="subtitle">Sign in to your account</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group-custom">
                            <label>Email address</label>
                            <div className="input-with-icon">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group-custom">
                            <label>Password</label>
                            <div className="input-with-icon password-input-group">
                                <i className="fas fa-lock"></i>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="password-toggle-text"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                            </div>
                        </div>

                        <div className="form-actions">
                            <a href="#forgot" className="forgot-password">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-lg">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
