import { Outlet } from 'react-router';
import { ProfessionalAside } from '@/components/DashboardComponents/ProfessionalAside';

export const ProfessionalDashboardLayout = () => {
    return (
        <div className="flex">
            <ProfessionalAside />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};
