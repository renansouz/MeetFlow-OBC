import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useTheme } from '@/context/theme-provider';


export function AppLayout() {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-[#09090B]' : 'bg-[#fff]';

    return (

        <div className={`flex min-h-screen flex-col antialiased ${backgroundToggle}`}>
            <Header />

            <div className="">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
