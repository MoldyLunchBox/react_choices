import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(Props) {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        // @todo: validate token with api
        if (username && password) {
            setAuth({
                isAuth: true
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {Props.children}
        </AuthContext.Provider>
    );
}