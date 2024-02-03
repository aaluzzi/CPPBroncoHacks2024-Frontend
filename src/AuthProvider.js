import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                const response = await axios.get('http://localhost:3001/api/user', config);
                setUserInfo(response.data);
                setIsAuthenticated(true);
                setUserToken(token);
            } catch (error) {
                console.error('Error fetching user info:', error);
                logout();
            }
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const login = (token) => {
        setIsAuthenticated(true);
        setUserToken(token);
        localStorage.setItem('token', token);
        fetchUserInfo();
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserToken(null);
        setUserInfo(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userInfo, login, logout, userToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
