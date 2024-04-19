import { LucideMessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useTheme } from '@/components/theme/theme-provider';
import { useAuth } from '@/context/auth-provider';
import Logo from '@/public/Logo.svg';
import LightLogo from '@/public/Logo-light.svg';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
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
      <div className="ml-10 flex items-center">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-inherit hover:bg-inherit">
              <LucideMessageCircleQuestion className="h-11 w-11 rounded-md bg-accent/20 p-2 text-foreground hover:bg-primary/90" />
            </Button>
          </DialogTrigger>
          <DialogContent className="h-2/3  overflow-y-auto">
            <DialogHeader className="my-5 flex items-center rounded-md bg-primary/40 p-10 text-center">
              <DialogTitle className="text-center text-2xl font-bold">
                Bem-vindo ao <br /> Suporte MeetFlow!
              </DialogTitle>
              <DialogDescription className="text-base">
                Estamos sempre presentes para te ajudar
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3">
              <div className="mb-5 flex  flex-col gap-2">
                <h2 className="text-center text-2xl">Seções e Acessibilidade</h2>
                <h3 className="mb-3 text-xl font-semibold">Aside</h3>
                <p>
                  <span className="font-bold">Criar:</span> Aqui é possivel criar um agendamento
                  para os outros usuários conseguirem marcar reunião com você
                </p>
                <p>
                  <span className="font-bold">Serviços:</span> Todos profissionais disponiveis na
                  plataforma
                </p>
                <p>
                  <span className="font-bold">disponibilidade: </span>Edite sua disponibilidade
                  deixando os melhores horários para voce
                </p>
                <p>
                  <span className="font-bold">Configurações: </span>Mude seu tema para claro ou
                  escuro de acordo com sua preferênciaz
                </p>
              </div>
              <div className="mb-5 flex  flex-col gap-2">
                <h3 className="mb-3 text-xl font-semibold">Opções perfil</h3>
                <p>
                  <span className="font-bold">Ver Perfil:</span> Gerenciar seu perfil, editar e
                  gestão de serviços
                </p>
                <p>
                  <span className="font-bold">Ver Status:</span>Possivel ver todo seu status
                  profissional
                </p>
                <p>
                  <span className="font-bold">Sair: </span>Sair da sua conta
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-center text-2xl font-bold">Entre em Contato</h2>
                <p>
                  <span className="font-bold">E-mail:</span> support@meetflow.com.
                </p>
                <p>
                  <span className="font-bold">Telefone: </span> Ligue para (+55) 9945-6162 durante o
                  horário comercial.
                </p>
                <h2 className="my-5 text-center text-2xl font-bold">Nosso Compromisso</h2>
                <p>
                  Sua satisfação é nossa prioridade. Estamos aqui para garantir que sua experiência
                  com o MeetFlow seja suave e produtiva.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
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
            <DropdownMenuLabel className="text-lg font-black">Conta</DropdownMenuLabel>
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
