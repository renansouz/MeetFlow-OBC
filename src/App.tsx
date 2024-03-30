import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/context/theme-provider';
import { router } from '@/router';

import Preloader from './components/Preload';
import { AuthProvider } from './context/auth-provider';
import { queryClient } from './libs/react-query';
import { GlobalStyles } from './styles/global';

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
                <AuthProvider>
                    <ThemeProvider storageKey="MeetFlow-theme" defaultTheme="dark">
                        <GlobalStyles />
                        <QueryClientProvider client={queryClient}>
                            <RouterProvider router={router} />
                            {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
                        </QueryClientProvider>
                    </ThemeProvider>
                </AuthProvider>
            )}
        </>
    );
}

export default App;
