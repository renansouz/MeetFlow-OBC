import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header/header';

export function AuthLayout() {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Header />
            <p>teste</p>

            <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
                <Outlet />
            </div>
        </div>
    );
}
