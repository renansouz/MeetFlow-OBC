import { Outlet } from 'react-router-dom';

import { useTheme } from '@/components/theme/theme-provider';

export function AuthLayout() {
  const { theme } = useTheme();
  const backgroundToggle = theme === 'dark' ? 'bg-card' : 'bg-[#f00]';
  return (
    <div className={`flex min-h-screen flex-col antialiased ${backgroundToggle}`}>
      <Outlet />
    </div>
  );
}
