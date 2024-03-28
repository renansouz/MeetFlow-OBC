import { Outlet } from 'react-router';

import { useTheme } from '@/context/theme-provider';
import { ProfessionalAside } from '@/pages/professional/Dashboard/components/ProfessionalAside';

export const ProfessionalDashboardLayout = () => {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-slate-900' : 'bg-[#fff]';

    return (
        <div className={'flex'}>
            <ProfessionalAside />
            <div className={`w-full h-screen overflow-hidden overflow-y-scroll ${backgroundToggle}`}>
                <Outlet />
            </div>
        </div>
    );
};
