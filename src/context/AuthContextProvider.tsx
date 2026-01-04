import { useState, useEffect, createContext } from "react";


export type AuthContextType = {
    accessToken: string | null,
    setAccessToken:(token:string | null) => void,
    login: (token: string) => void,
    logout: () => Promise<void>,
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = (props: {children: React.ReactNode}) => {
    const [accessToken, setAccessToken] = useState<string | null>(null)

    const login = (token:string) => {
        console.log("AuthContextProvider.login called with", token);
        setAccessToken(token)
    }

    const logout = async () => {
        //TODO: backend 

        setAccessToken(null)
    } 
    useEffect(() => {
        console.log("AuthContextProvider accessToken changed:", accessToken);
    }, [accessToken]);
    return (
        <AuthContext.Provider value={{accessToken, setAccessToken,login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider