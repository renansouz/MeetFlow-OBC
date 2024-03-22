import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/context/theme-provider';
import { router } from '@/router';

import Preloader from './components/Preload';
import { GlobalStyles } from './styles/global';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <ThemeProvider storageKey="MeetFlow-theme" defaultTheme="dark">
                    <GlobalStyles />
                    <RouterProvider router={router} />
                </ThemeProvider>
            )}
        </>
    );
}

export default App;
