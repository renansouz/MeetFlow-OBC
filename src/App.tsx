import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/context/theme-provider";
import { router } from "@/router";

function App() {
    return (
        <>
            <ThemeProvider storageKey="MeetFlow-theme" defaultTheme="dark">
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
