import React, { createContext, useState, useEffect, useContext } from 'react';

import api from '../services/api';

import { useToast } from '../hooks/ToastContext';

interface AuthContextData {
    signed: boolean;
    user: string | null;
    signIn(username: string, password: string): Promise<void>;
    signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const { addToast, removeToast } = useToast();

    async function signIn(username: string, password: string) {

        try {
            const response = await api.post('/users-api/rest-auth/login/', {
                "username": username,
                "password": password,
            });

            const { key } = response.data;
            setUser(response.data);
            console.log(user);
            localStorage.setItem('token', key);

        } catch (error) {
            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Usuário ou senha invalida!'
            });
        }
    }

    async function signOut() {
        const token = localStorage.getItem('token');
        await api.post("/users-api/rest-auth/logout/", {
            token
        });

        localStorage.removeItem("token");
        setUser(null);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setUser(token);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
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