import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme/theme-provider';

import Preloader from './components/preload';
import { AuthProvider } from './context/auth-provider';
import { queryClient } from './lib/react-query';
import { RouterWrapper } from './router';
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

                        <Toaster richColors />
                        <QueryClientProvider client={queryClient}>
                            <RouterProvider router={RouterWrapper()} />
                            {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
                        </QueryClientProvider>
                    </ThemeProvider>
                </AuthProvider>
            )}
        </>
    );
}
export default App;
