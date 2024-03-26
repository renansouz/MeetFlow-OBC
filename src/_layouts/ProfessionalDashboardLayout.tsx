import { Outlet } from 'react-router';

import { UserAside } from '@/components/DashboardComponents/ProfessionalAside';

export const ProfessionalDashboardLayout = () => {
    return (
        <div className="flex">
            <UserAside />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};
