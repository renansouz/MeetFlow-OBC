import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Authenticated } from '@/components/Header/Authenticated';

export function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Authenticated />

            <div className="">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
