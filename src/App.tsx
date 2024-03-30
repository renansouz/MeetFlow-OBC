import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/context/theme-provider';
import Preloader from './components/Preload';
import { AuthContextProvider } from './context/auth-provider';
import { GlobalStyles } from './styles/global';
import { RouterWrapper } from './router';


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <AuthContextProvider>
                    <ThemeProvider storageKey="MeetFlow-theme" defaultTheme="dark">
                        <GlobalStyles />
                        <RouterProvider router={RouterWrapper()} />
                    </ThemeProvider>
                </AuthContextProvider>
            )}
        </>
    );
}

export default App;
