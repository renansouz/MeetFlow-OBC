import { Outlet } from 'react-router';

import { UserAside } from '@/components/UserAside';

export const UserDashboardLayout = () => {
    return (
        <div className="flex">
            <UserAside />

            <div className="">
                <Outlet />
            </div>
        </div>
    );
};
