import { Outlet } from 'react-router-dom';

export function AuthLayout() {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <div className="flex flex-1 flex-col gap-4">
                <Outlet />
            </div>
        </div>
    );
}
