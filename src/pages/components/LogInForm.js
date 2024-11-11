// components/LoginForm.js
"use client";
import {useState} from 'react';

import loginForm from '../../styles/LogIn.module.css'

export default function LoginForm() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showSignUp, setShowSignUp] = useState(true);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        keyword: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        setShowWelcome(true);
        setShowSignUp(false);

        e.preventDefault();

        try {
            const response = await fetch('api/basicApi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User created:', data);
                // Handle successful registration, e.g., show a success message or redirect
            } else {
                const errorData = await response.json();
                console.error('Error creating user:', errorData);
                // Handle error, e.g., show an error message
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <>
            {showSignUp && (
                <div className="login-container">
                    <div className="login-box">
                        <h2>Log in</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    placeholder={"Username"}
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <input
                                    placeholder={"Passwort"}
                                    type="password"
                                    id="keyword"
                                    name="keyword"
                                    value={formData.keyword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className='login-button' type="submit">Anmelden</button>
                        </form>
                    </div>
                </div>
            )}
            {showWelcome && (
                <Welcome />

            )}
        </>

    );
}