import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Header />

            <div className="">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
