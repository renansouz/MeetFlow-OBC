import { Link } from 'react-router-dom';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';
import { useAuth } from '@/context/auth-provider';
import { NotAuthenticated } from './NotAuthenticated';
import { Authenticated } from './Authenticated';

export function Header() {

    const { theme } = useTheme();
    const { isAuth } = useAuth()

    return (
        <div className="relative border-b px-28">
            <div className="h-26 flex items-center justify-between gap-6 px-6">
                <Link to={'/'}>
                    <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="img h-28" />
                </Link>
                <div>
                    {isAuth === true ? <Authenticated/>  : <NotAuthenticated/> }
                </div>
            </div>
        </div>
    );
}
