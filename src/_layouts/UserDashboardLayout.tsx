import { Outlet } from 'react-router';

import { UserAside } from '@/components/DashboardComponents/UserAside';

export const UserDashboardLayout = () => {
    return (
        <div className="flex">
            <UserAside />

            <div className="w-full h-screen overflow-hidden overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    );
};
