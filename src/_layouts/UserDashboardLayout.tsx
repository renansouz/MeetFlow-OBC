import { Outlet } from 'react-router';
import { UserAside } from '@/pages/user/UserDashboard/pages/components/UserAside';
import { useTheme } from '@/context/theme-provider';


export const UserDashboardLayout = () => {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-[#09090B]' : 'bg-[#fff]';
    return (
        <div className="flex">
            <UserAside />

            <div className={`w-full h-screen overflow-hidden overflow-y-scroll ${backgroundToggle}`}>
                <Outlet />
            </div>
        </div>
    );
};
