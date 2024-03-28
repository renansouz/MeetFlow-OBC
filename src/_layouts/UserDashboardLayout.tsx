import { Outlet } from 'react-router';

import { useTheme } from '@/context/theme-provider';
import { ClientAside } from '@/pages/user/ClientDashboard/pages/components/ClientAside';

export const UserDashboardLayout = () => {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-background' : 'bg-[#fff]';
    return (
        <div className="flex">
            <ClientAside />

            <div className={`w-full h-screen overflow-hidden overflow-y-scroll ${backgroundToggle}`}>
                <Outlet />
            </div>
        </div>
    );
};
