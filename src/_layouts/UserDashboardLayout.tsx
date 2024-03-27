import { Outlet } from 'react-router';
import { ClientAside } from '@/pages/user/ClientDashboard/pages/components/ClientAside';
import { useTheme } from '@/context/theme-provider';


export const UserDashboardLayout = () => {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-[#09090B]' : 'bg-[#fff]';
    return (
        <div className="flex">
            <ClientAside />

            <div className={`w-full h-screen overflow-hidden overflow-y-scroll ${backgroundToggle}`}>
                <Outlet />
            </div>
        </div>
    );
};
