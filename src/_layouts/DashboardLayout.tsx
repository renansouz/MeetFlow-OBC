import { Outlet } from 'react-router';

import { useTheme } from '@/components/theme/theme-provider';
import { ClientAside } from '@/pages/dashboard/client/components/ClientAside';
import { ProfessionalAside } from '@/pages/dashboard/professional/components/ProfessionalAside';

interface UserTypesProps {
    userType: 'professional' | 'client';
}

export const DashboardLayout = ({ userType }: UserTypesProps) => {
    const { theme } = useTheme();
    const backgroundToggle = theme === 'dark' ? 'bg-background' : 'bg-[#fff]';

    const renderAside = () => {
        if (userType === 'professional') {
            return <ProfessionalAside />;
        } else if (userType === 'client') {
            return <ClientAside />;
        } else {
            return null;
        }
    };

    return (
        <div className="flex">
            {renderAside()}

            <div className={`h-screen w-full overflow-hidden overflow-y-scroll ${backgroundToggle}`}>
                <Outlet />
            </div>
        </div>
    );
};
