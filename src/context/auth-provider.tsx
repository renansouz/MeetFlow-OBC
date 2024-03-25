import { createContext, useContext, useState } from 'react';

export type authType = boolean;

export type authContextType = {
    isAuth: authType;
    setAuth: (authState: authType) => void;
};

export const authContext = createContext<authContextType | undefined>(undefined);

type authProviderProps = { children: React.ReactNode };

export const AuthContextProvider = ({ children }: authProviderProps) => {
    const [isAuthState, setAuthState] = useState<authType>(false);

    const setAuth = (authState: authType) => {
        setAuthState(authState);
    };

    const value: authContextType = {
        isAuth: isAuthState,
        setAuth: setAuth,
    };

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuth = (): authContextType => {
    const context = useContext(authContext);

    if (context === undefined) throw new Error('useAuth must be used within a AuthContextProvider');

    return context;
};
