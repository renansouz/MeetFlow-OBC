import { Outlet } from 'react-router';
import { ProfessionalAside } from '@/pages/professional/Dashboard/components/ProfessionalAside';
import { useTheme } from '@/context/theme-provider';

export const ProfessionalDashboardLayout = () => {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-[#09090B]' : 'bg-[#fff]';

    return (
        <div className={'flex'}>
            <ProfessionalAside />
            <div className={`w-full h-screen overflow-hidden overflow-y-scroll ${backgroundToggle}`}>
                <Outlet />
            </div>
        </div>
    );
};
