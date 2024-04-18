import { SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useTheme } from '@/components/theme/theme-provider';
import { useAuth } from '@/context/auth-provider';
import Logo from '@/public/Logo.svg';
import LightLogo from '@/public/Logo-light.svg';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const HeaderAside = () => {
  const { logout } = useAuth();
  const { theme } = useTheme();
  return (
    <div className="fixed flex h-20 w-full items-center justify-between border-b bg-card p-2">
      <div>
        <Link to={'/professional/dashboard'}>
          <img
            src={theme === 'dark' ? Logo : LightLogo}
            alt=""
            className="mb-0 h-14 max-lg:hidden"
          />
        </Link>
        <Link to={'/professional/dashboard'}>
          <img
            src={theme === 'dark' ? Logo : LightLogo}
            alt=""
            className="img mb-10 h-11 items-center lg:hidden"
          />
        </Link>
      </div>
      <div className="flex items-center rounded-md border border-primary">
        <input
          type="text"
          name=""
          id=""
          className="w-96 bg-transparent px-3 text-base outline-none max-sm:w-80"
          placeholder="Search for a professional"
        />
        <button className="rounded-md border-none bg-primary px-2 py-2 outline-none ">
          <SearchIcon className="text-white" />
        </button>
      </div>
      <div className="mr-10 flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-11 w-11 rounded-lg">
              <Avatar className="h-11 w-11 rounded-lg">
                <AvatarImage
                  className="border-background"
                  src={'https://github.com/renansouz.png'}
                />
                <AvatarFallback className="rounded-md border-4 border-background"></AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-lg text-black">Conta</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link
                to={'/professional/profile'}
                className="flex h-full w-full rounded-md px-1 hover:bg-primary/10"
              >
                Ver Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                to={'/professional/dashboard'}
                className="flex h-full w-full rounded-md px-1 hover:bg-primary/10"
              >
                Ver Status
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" hover:text-red-500" onClick={() => logout()}>
              <Link to={'/'}>Sair</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
