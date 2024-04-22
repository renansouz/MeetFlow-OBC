import { Outlet } from 'react-router';

import { ClientAside } from '@/components/clientAside';
import { HeaderAside } from '@/components/headerAside';
import { ProfessionalAside } from '@/components/ProfessionalAside';

interface UserTypesProps {
  userType: 'professional' | 'client';
}

export const DashboardLayout = ({ userType }: UserTypesProps) => {
  const renderAside = () => {
    if (userType === 'professional') {
      return <ProfessionalAside />;
    } else if (userType === 'client') {
      return <ClientAside />;
    } else {
      return null;
    }
  };
  const renderHeaderAside = () => {
    if (userType === 'professional') {
      return <HeaderAside />;
    }
    return null;
  };

  const renderMainContentClass = () => {
    if (userType === 'professional') {
      return 'ml-[16rem]';
    }
    return 'ml-[20rem]';
  };

  const renderMainContentPadding = () => {
    if (userType === 'professional') {
      return 'pt-20';
    }
    return '';
  };

  return (
    <div>
      {renderHeaderAside()}
      <div className={`flex ${renderMainContentPadding()}`}>
        {renderAside()}
        <div className={`h-full w-full ${renderMainContentClass()}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
