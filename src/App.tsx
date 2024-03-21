import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/context/theme-provider';
import { router } from '@/router';

import { GlobalStyles } from './styles/global';


function App() {
    return (
        <>
            <ThemeProvider storageKey="MeetFlow-theme" defaultTheme="dark">
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
