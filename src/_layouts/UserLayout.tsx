import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Authenticated } from '@/components/Header/Authenticated';
import { useTheme } from '@/context/theme-provider';

export function AppLayout() {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-[#09090B]' : 'bg-[#fff]';
    return (
        <div className={`flex min-h-screen flex-col antialiased ${backgroundToggle}`}>
            <Authenticated />

            <div className="">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
