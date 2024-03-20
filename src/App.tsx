import { RouterProvider } from 'react-router-dom';
<<<<<<< HEAD

import { ThemeProvider } from '@/context/theme-provider';
import { router } from '@/router';
=======
import { ThemeProvider } from "@/context/theme-provider";
import { router } from "@/router";
import { GlobalStyles } from './styles/global';
>>>>>>> 758e1715d8556a96dedadec680f6ce8c2b111990

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
