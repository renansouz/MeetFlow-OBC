import { Github, Instagram, Twitter, Youtube } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/context/theme-provider';
import OnlyDarkLogo from '@/public/img/only-logo-black.svg';
import OnlyLightLogo from '@/public/img/only-logo-white.svg';

export const Footer = () => {
    const { theme } = useTheme();

    return (
        <div className={'flex flex-col items-center justify-center bg-card pb-10 '}>
            <Separator orientation="horizontal" className="mb-24 h-0.5 w-full max-xl:mb-7" />
            <div className="w-5/6 max-xl:w-full">
                <div className="flex w-full flex-wrap items-start justify-evenly gap-32 max-xl:gap-0 max-xl:text-xs lg:text-base">
                    <div className="bg-blue flex w-2/12 flex-col items-center justify-center max-xl:mb-9 max-xl:w-full max-xl:items-center">
                        <img src={theme === 'dark' ? OnlyLightLogo : OnlyDarkLogo} alt="" className="w-2/4 text-center max-xl:w-20 " />
                        <p className="text-center max-xl:text-sm lg:text-base">Organize. Agende. Conecte-se. MeetFlow.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="mb-2 text-xl font-medium max-xl:text-sm">Recursos</h2>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Tutoriais</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="mb-2 text-xl font-medium max-xl:text-sm">Sobre Nós</h2>
                        <a href="#">Quem Somos</a>
                        <a href="#">Nossa Missão</a>
                        <a href="#">Equipe</a>
                        <a href="#">Blog</a>
                        <a href="#">Newsletters</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="mb-2 text-xl font-medium max-xl:text-sm">Suporte</h2>
                        <a href="#">FAQ</a>
                        <a href="#">Contate-nos</a>
                        <a href="#">Ajuda</a>
                    </div>
                </div>
                <Separator orientation="horizontal" className="my-10 h-0.5 w-full" />
                <div className="flex justify-between pb-5 max-xl:mx-10 max-sm:flex-col max-sm:items-center">
                    <p className="text-sm">Copyright &copy; 2024 MeetFlow. All Rights Reserved.</p>
                    <div className="flex gap-5 max-sm:my-5">
                        <Instagram />
                        <Github />
                        <Twitter />
                        <Youtube />
                    </div>
                </div>
            </div>
        </div>
    );
};
