import { Outlet } from 'react-router';
import { ProfessionalAside } from '@/pages/professional/Dashboard/components/ProfessionalAside';

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
