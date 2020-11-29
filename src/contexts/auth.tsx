import React, { createContext, useState, useEffect, useContext } from 'react';

import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: string | null;
    signIn(username: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => { 
    const [user, setUser] = useState<string | null>(null);

    async function signIn(username: string, password: string) {
    
        const response = await api.post('/users-api/rest-auth/login/', {
          "username": username,
          "password": password,
        });
        
        const { key } = response.data;
        setUser(response.data);
        console.log(user);
        localStorage.setItem('token', key);
    
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setUser(token);
        }
    },[]);
    
    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;

}