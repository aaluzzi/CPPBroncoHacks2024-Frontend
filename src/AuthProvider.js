import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = (token) => {
        console.log("logged in");
        setIsAuthenticated(true);
        setUserToken(token);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        console.log("logged out");
        setIsAuthenticated(false);
        setUserToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
