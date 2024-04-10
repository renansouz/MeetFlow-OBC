import { Outlet } from 'react-router-dom';

import { useTheme } from '@/components/theme/theme-provider';

export function AuthLayout() {
  const { theme } = useTheme();
  const backgroundToggle = theme === 'dark' ? 'bg-card' : 'bg-[#fff]';
  return (
    <div className={`flex min-h-screen flex-col antialiased ${backgroundToggle}`}>
      <div className="flex flex-1 flex-col gap-4">
        <Outlet />
      </div>
    </div>
  );
}
